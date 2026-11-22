const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

// ייבוא המודלים - שים לב לשמות הקבצים
const Lead = require('./models/Lead'); 
const Product = require('./models/Product');

const app = express();
app.use(express.json());
app.use(cors());

// חיבור ל-MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB connected');
    seedProduct(); // מריץ את יצירת המוצר רק לאחר חיבור מוצלח
})
.catch(err => console.log('MongoDB connection error:', err));

// --- API Endpoints ---

// 1. שליפת כל המוצרים
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: "שגיאה בשליפת מוצרים" });
    }
});

// 2. יצירת ליד חדש עם ולידציה
app.post('/api/leads', async (req, res) => {
    try {
        const { name, phone, email, message } = req.body;

        if (!name || (!phone && !email)) {
            return res.status(400).json({ message: "נא להזין שם וטלפון או אימייל" });
        }

        const newLead = new Lead({ name, phone, email, message });
        const savedLead = await newLead.save();
        res.status(201).json(savedLead);
    } catch (err) {
        res.status(500).json({ message: "שגיאה בשמירת הליד", error: err.message });
    }
});

// 3. שליפת לידים עם פילטור (עבור מערכת הניהול/בונוס)
app.get('/api/leads', async (req, res) => {
    try {
        const { status } = req.query;
        const filter = status ? { status } : {};
        const leads = await Lead.find(filter).sort({ createdAt: -1 });
        res.json(leads);
    } catch (err) {
        res.status(500).json({ message: "שגיאה בשליפת לידים" });
    }
});

// פונקציית ה-Seed ליצירת נתונים ראשוניים
async function seedProduct() {
    try {
        const count = await Product.countDocuments();
        if (count === 0) {
            await Product.create({
                name: "הארה Smart Dimmer Pro",
                model: "mark1",
                positions: 1,
                color: "white",
                price: 299,
                features: ["עמעום חלק ללא ריצוד", "שליטה מלאה מהאפליקציה", "עיצוב פרימיום יוקרתי"],
                imageUrl: "https://he-ara.co.il/wp-content/uploads/2023/07/dimmer-white.jpg",
                inStock: true
            });
            console.log("מוצר ראשון נוצר בהצלחה!");
        }
    } catch (err) {
        console.error("Seed error:", err);
    }
}

// 4. שליפת ליד בודד לפי ID
app.get('/api/leads/:id', async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id);
        if (!lead) {
            return res.status(404).json({ message: "ליד לא נמצא" });
        }
        res.json(lead);
    } catch (err) {
        res.status(500).json({ message: "שגיאה בשליפת הליד", error: err.message });
    }
});

// 5. עדכון סטטוס ליד
app.patch('/api/leads/:id', async (req, res) => {
    try {
        const { status } = req.body;
        
        // ולידציה - וידוא שהסטטוס תקין
        const validStatuses = ['new', 'contacted', 'converted', 'closed'];
        if (status && !validStatuses.includes(status)) {
            return res.status(400).json({ 
                message: "סטטוס לא תקין. אפשרויות: new, contacted, converted, closed" 
            });
        }

        const updatedLead = await Lead.findByIdAndUpdate(
            req.params.id,
            { status, updatedAt: Date.now() },
            { new: true, runValidators: true }
        );

        if (!updatedLead) {
            return res.status(404).json({ message: "ליד לא נמצא" });
        }

        res.json(updatedLead);
    } catch (err) {
        res.status(500).json({ message: "שגיאה בעדכון הליד", error: err.message });
    }
});

// 6. שליפת מוצר בודד לפי ID
app.get('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "מוצר לא נמצא" });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: "שגיאה בשליפת המוצר", error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));