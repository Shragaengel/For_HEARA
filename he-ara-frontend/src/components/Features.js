import React from 'react';
import { Zap, Smartphone, Shield, Settings, Wifi, Clock, Battery, Eye } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'ללא ריצודים',
      description: 'פטנט ישראלי ייחודי למניעת הבהובים ועמעום חלק',
      details: ['עמעום 0-100% רציף', 'ללא פגיעה בעיניים', 'טכנולוגיה רשומה']
    },
    {
      icon: Smartphone,
      title: 'שליטה משולשת',
      description: 'מתג קיר, אפליקציה חכמה, ופקודות קול',
      details: ['iOS ו-Android', 'Alexa & Google', 'שליטה מרחוק']
    },
    {
      icon: Shield,
      title: 'פאנל זכוכית פרימיום',
      description: 'זכוכית מחוסמת רגישה למגע עם חיווי LED',
      details: ['עמיד לשריטות', 'קל לניקוי', 'עיצוב מודרני']
    },
    {
      icon: Settings,
      title: '3 מעגלים במתג אחד',
      description: 'שליטה עצמאית על שלושה מעגלי תאורה שונים',
      details: ['חיסכון במקום', 'נוחות מקסימלית', 'גמישות מלאה']
    },
    {
      icon: Wifi,
      title: 'Wi-Fi מובנה',
      description: 'חיבור ישיר לרשת הבית ללא צורך בגשר נוסף',
      details: ['2.4GHz יציב', 'הגדרה קלה', 'עדכונים אוטומטיים']
    },
    {
      icon: Clock,
      title: 'טיימרים וסצנות',
      description: 'אוטומציה מלאה עם תזמון והגדרות מותאמות אישית',
      details: ['מצב שבת', 'סימולציית נוכחות', 'תסריטים חכמים']
    },
    {
      icon: Battery,
      title: 'זיכרון מצב',
      description: 'שומר את ההגדרות האחרונות גם בהפסקת חשמל',
      details: ['אין צורך בהגדרה מחדש', 'נוחות מקסימלית', 'חסכון בזמן']
    },
    {
      icon: Eye,
      title: 'נורית חיווי חכמה',
      description: 'LED כחולה שמאפשרת התמצאות גם בחושך',
      details: ['נראית בלילה', 'לא מפריעה לשינה', 'אלגנטית']
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-800" id="features">
      <div className="max-w-7xl mx-auto">
        {/* כותרת */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">למה לבחור בהארה?</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            8 סיבות מצוינות שהופכות את הארה סימן 1 למתג התאורה החכם המתקדם בישראל
          </p>
        </div>

        {/* רשת תכונות */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className="group bg-slate-900 rounded-2xl p-8 border-2 border-slate-700 hover:border-slate-600 hover:shadow-2xl transition-all duration-300"
              >
                {/* אייקון */}
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-700">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* כותרת */}
                <h3 className="text-xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>

                {/* תיאור */}
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* פרטים נוספים */}
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* קריאה לפעולה */}
        <div className="text-center bg-slate-900 rounded-3xl p-12 border border-slate-700 shadow-2xl">
          <h3 className="text-3xl font-bold mb-4 text-white">מוכנים לחוות את ההבדל?</h3>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            הצטרפו לאלפי משפחות בישראל שכבר שדרגו את הבית עם מתגי הארה
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-slate-800 px-6 py-3 rounded-full border border-slate-700">
              <span className="text-2xl font-bold text-white">3</span>
              <span className="text-slate-400 mr-2">שנות אחריות</span>
            </div>
            <div className="bg-slate-800 px-6 py-3 rounded-full border border-slate-700">
              <span className="text-2xl font-bold text-white">500W</span>
              <span className="text-slate-400 mr-2">הספק למעגל</span>
            </div>
            <div className="bg-slate-800 px-6 py-3 rounded-full border border-slate-700">
              <span className="text-2xl font-bold text-white">0%</span>
              <span className="text-slate-400 mr-2">ריצודים</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;