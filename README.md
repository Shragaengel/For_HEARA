# הארה - דף נחיתה B2C למתגי תאורה חכמים

פרויקט Full Stack המציג את מתגי התאורה החכמים של הארה עם דמו אינטראקטיבי וטופס יצירת קשר.

## 🎯 תיאור הפרויקט

דף נחיתה שיווקי לקהל B2C (לקוח פרטי) המציג את **הארה סימן 1 - 3 מעגלים** - מתג תאורה חכם עם:
- שליטה משולשת: מתג קיר, אפליקציה, ופקודות קול
- עמעום חלק ללא ריצודים (פטנט ישראלי)
- 3 מעגלי תאורה במתג אחד
- דמו אינטראקטיבי שמאפשר למשתמשים לחוות את המוצר

## 🛠️ טכנולוגיות

### Frontend
- **React 19** - ספריית UI
- **Tailwind CSS** - עיצוב ו-styling
- **Lucide React** - אייקונים
- **Axios** - תקשורת עם ה-API

### Backend
- **Node.js** - סביבת ריצה
- **Express** - framework לשרת
- **MongoDB** - בסיס נתונים
- **Mongoose** - ODM ל-MongoDB
- **CORS** - תמיכה ב-cross-origin requests

## 📁 מבנה הפרויקט
```
For_Heara/
├── he-ara-frontend/          # Frontend - React App
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.js            # סקשן ראשי
│   │   │   ├── InteractiveDemo.js  # דמו אינטראקטיבי של המתג
│   │   │   ├── ProductList.js      # רשימת מוצרים
│   │   │   └── ContactForm.js      # טופס יצירת קשר
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
│
└── backend/                   # Backend - Express Server
    ├── models/
    │   ├── Lead.js            # מודל לידים
    │   └── Product.js         # מודל מוצרים
    ├── server.js              # שרת ראשי
    ├── .env                   # משתני סביבה
    └── package.json
```

## 🚀 הוראות התקנה והרצה

### דרישות מקדימות
- Node.js (גרסה 16 ומעלה)
- MongoDB (מקומי או Atlas)
- npm או yarn

### שלב 1: התקנת Backend
```bash
# כנס לתיקיית ה-backend
cd backend

# התקן dependencies
npm install

# צור קובץ .env עם המשתנים הבאים:
MONGO_URI=mongodb://localhost:27017/heara
PORT=5000

# הרץ את השרת
npm start
```

השרת ירוץ על `http://localhost:5000`

### שלב 2: התקנת Frontend
```bash
# פתח טרמינל חדש
# כנס לתיקיית ה-frontend
cd he-ara-frontend

# התקן dependencies
npm install

# הרץ את האפליקציה
npm start
```

האפליקציה תיפתח באופן אוטומטי ב-`http://localhost:3000`

## 📡 API Endpoints

### מוצרים (Products)
- `GET /api/products` - שליפת כל המוצרים
- `GET /api/products/:id` - שליפת מוצר בודד

### לידים (Leads)
- `POST /api/leads` - יצירת ליד חדש (פנייה מהטופס)
- `GET /api/leads` - שליפת כל הלידים (עם אפשרות פילטור)
- `GET /api/leads/:id` - שליפת ליד בודד
- `PATCH /api/leads/:id` - עדכון סטטוס ליד

#### דוגמה ליצירת ליד:
```json
POST /api/leads
{
  "name": "יוסי כהן",
  "phone": "050-1234567",
  "email": "yossi@example.com",
  "message": "מעוניין במידע נוסף על המוצר"
}
```

## ✨ תכונות עיקריות

### Frontend
- ✅ דף נחיתה מלא עם Hero section
- ✅ **דמו אינטראקטיבי** - מתג תאורה שעובד בזמן אמת
  - 3 מעגלים עצמאיים
  - סליידרים לבקרת עוצמת אור
  - תמונת חדר דינמית שמשתנה לפי התאורה
- ✅ רשימת מוצרים שמושכים מה-API
- ✅ טופס יצירת קשר עם אפקט "פלאש" והגלילה למעלה
- ✅ עיצוב Responsive (מתאים למובייל)
- ✅ תמיכה ב-RTL (עברית)

### Backend
- ✅ API RESTful מלא
- ✅ Validation על כל השדות
- ✅ Error handling מקיף
- ✅ פילטור לידים לפי סטטוס
- ✅ Seed data אוטומטי למוצרים

## 🧪 בדיקות

### בדיקת ה-API
```bash
# בדיקת מוצרים
curl http://localhost:5000/api/products

# בדיקת יצירת ליד
curl -X POST http://localhost:5000/api/leads \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"0501234567","email":"test@test.com","message":"Test message"}'
```

## 📝 הערות נוספות

- ה-Backend משתמש ב-MongoDB מקומי. ניתן להשתמש גם ב-MongoDB Atlas
- תמונות המוצרים מושכות מ-Unsplash (ניתן להחליף לתמונות אמיתיות)
- הטופס שולח נתונים ל-backend ושומר ב-MongoDB
- אפקט הפלאש בטופס מתרחש רק לאחר שליחה מוצלחת

## 👨‍💻 מפתח

**שם:** שרגא אנגל  
**אימייל:** shragae120@gmail.com 
**GitHub:** [https://github.com/Shragaengel/For_Heara](https://github.com/Shragaengel/For_Heara)

## 📄 רישיון

פרויקט זה נוצר כחלק ממשימת בית לתפקיד Full Stack Junior Developer בחברת הארה.