


// import React, { useState } from 'react';
// import axios from 'axios';

// const ContactForm = () => {
//   // עדכון ה-state שיכלול גם phone
//   const [formData, setFormData] = useState({ 
//     name: '', 
//     phone: '', 
//     email: '', 
//     message: '' 
//   });
//   const [status, setStatus] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // שליחת כל הנתונים לשרת
//       await axios.post('http://localhost:5000/api/leads', formData);
//       setStatus('ההודעה נשלחה בהצלחה!');
//       setFormData({ name: '', phone: '', email: '', message: '' });
//     } catch (err) {
//       setStatus('שגיאה בשליחת ההודעה. נסה שוב.');
//     }
//   };

//   return (
//     <section id="contact" className="py-24 bg-slate-900">
//       <div className="max-w-3xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12">השאירו <span className="text-blue-500">פרטים</span></h2>
        
//         <form onSubmit={handleSubmit} className="space-y-6 bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-xl">
//           {/* שדה שם מלא */}
//           <div>
//             <label className="block mb-2 text-sm font-medium">שם מלא</label>
//             <input 
//               type="text" 
//               className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-white"
//               value={formData.name}
//               onChange={(e) => setFormData({...formData, name: e.target.value})}
//               required 
//             />
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {/* שדה טלפון - חדש */}
//             <div>
//               <label className="block mb-2 text-sm font-medium">טלפון</label>
//               <input 
//                 type="tel" 
//                 className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-white"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                 required 
//               />
//             </div>

//             {/* שדה אימייל */}
//             <div>
//               <label className="block mb-2 text-sm font-medium">אימייל</label>
//               <input 
//                 type="email" 
//                 className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-white"
//                 value={formData.email}
//                 onChange={(e) => setFormData({...formData, email: e.target.value})}
//                 required 
//               />
//             </div>
//           </div>

//           {/* שדה הודעה */}
//           <div>
//             <label className="block mb-2 text-sm font-medium">הודעה</label>
//             <textarea 
//               className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl h-32 focus:ring-2 focus:ring-blue-500 outline-none text-white"
//               value={formData.message}
//               onChange={(e) => setFormData({...formData, message: e.target.value})}
//               required
//             ></textarea>
//           </div>

//           <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/20 text-white">
//             שלח הודעה
//           </button>
          
//           {status && <p className="text-center mt-4 text-blue-400 font-medium">{status}</p>}
//         </form>
//       </div>
//     </section>
//   );
// };
 
// export default ContactForm;

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    email: '', 
    message: '' 
  });
  const [status, setStatus] = useState('');
  const [showFlash, setShowFlash] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // שליחת כל הנתונים לשרת
      const response = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Network error');
      
      // הצגת הפלאש
      setShowFlash(true);
      setStatus('ההודעה נשלחה בהצלחה!');
      
      // איפוס הטופס
      setFormData({ name: '', phone: '', email: '', message: '' });
      
      // הסרת הפלאש אחרי 1.5 שניות
      setTimeout(() => {
        setShowFlash(false);
      }, 1500);
      
      // גלילה למעלה אחרי 2 שניות
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 2000);
      
      // הסרת הודעת ההצלחה אחרי 5 שניות
      setTimeout(() => {
        setStatus('');
      }, 5000);
      
    } catch (err) {
      setStatus('שגיאה בשליחת ההודעה. נסה שוב.');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <div dir="rtl">
      {/* אפקט פלאש מסך לבן */}
      <div 
        className={`fixed inset-0 bg-white pointer-events-none transition-opacity duration-500 z-50 ${
          showFlash ? 'opacity-50' : 'opacity-0'
        }`}
      />

      <section id="contact" className="py-24 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            השאירו <span className="text-blue-500">פרטים</span>
          </h2>
          
          <div className="space-y-6 bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-xl">
            {/* שדה שם מלא */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">שם מלא *</label>
              <input 
                type="text" 
                className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-white"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="איך קוראים לך?"
                required 
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* שדה טלפון */}
              <div>
                <label className="block mb-2 text-sm font-medium text-white">טלפון *</label>
                <input 
                  type="tel" 
                  className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-white"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="050-1234567"
                  required 
                />
              </div>

              {/* שדה אימייל */}
              <div>
                <label className="block mb-2 text-sm font-medium text-white">אימייל *</label>
                <input 
                  type="email" 
                  className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="example@email.com"
                  required 
                />
              </div>
            </div>

            {/* שדה הודעה */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">הודעה *</label>
              <textarea 
                className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl h-32 focus:ring-2 focus:ring-blue-500 outline-none text-white resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="כתוב לנו..."
                required
              ></textarea>
            </div>

            <button 
              onClick={handleSubmit}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/30 text-white transform hover:scale-105"
            >
              שלח הודעה
            </button>
            
            {/* הודעת סטטוס */}
            {status && (
              <div className={`text-center mt-4 p-4 rounded-xl ${
                status.includes('שגיאה') 
                  ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
                  : 'bg-green-500/20 text-green-300 border border-green-500/30'
              }`}>
                <p className="font-medium">{status}</p>
              </div>
            )}

            <p className="text-center text-sm text-slate-500 mt-4">
              * שדות חובה
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
 
export default ContactForm;