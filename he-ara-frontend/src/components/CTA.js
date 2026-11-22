import React from 'react';
import { Phone, Mail, MessageCircle, ArrowDown } from 'lucide-react';

const CTA = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-slate-900">
      {/* רקע גרדיאנט */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>
      
      {/* אפקט רקע */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            מוכנים לשדרג את הבית?
          </h2>
          <p className="text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            קבלו ייעוץ מקצועי חינם מצוות המומחים שלנו
          </p>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            נחזור אליכם תוך 24 שעות עם המלצות מותאמות אישית
          </p>
        </div>

        {/* כפתורי קריאה לפעולה */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button 
            onClick={scrollToContact}
            className="group bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-100 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-6 h-6" />
            השאירו פרטים
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
          
          <a 
            href="tel:0557040115"
            className="bg-slate-800 hover:bg-slate-700 text-white px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 border-2 border-slate-700"
          >
            <Phone className="w-6 h-6" />
            התקשרו עכשיו
          </a>
        </div>

        {/* יתרונות */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 text-center border border-slate-700">
            <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">תמיכה 24/7</h3>
            <p className="text-slate-400">זמינים לכל שאלה בכל זמן</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 text-center border border-slate-700">
            <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">ייעוץ מקצועי</h3>
            <p className="text-slate-400">צוות מומחים עם 100+ שנות ניסיון</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 text-center border border-slate-700">
            <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">התקנה מהירה</h3>
            <p className="text-slate-400">שירות והתקנה בכל הארץ</p>
          </div>
        </div>

        {/* מספר טלפון */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-3">או התקשרו ישירות:</p>
          <a 
            href="tel:0557040115" 
            className="text-4xl font-bold text-white hover:text-slate-300 transition-colors inline-flex items-center gap-3"
          >
            <Phone className="w-8 h-8" />
            055-7040115
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;