import React from 'react';
import { Zap, Wifi, Shield, Maximize2, Cpu, Clock, Radio, Battery, Lightbulb, Palette, CheckCircle, Home } from 'lucide-react';

const TechnicalSpecs = () => {
  return (
    <section className="py-24 px-4 bg-slate-900" id="specs">
      <div className="max-w-7xl mx-auto">
        {/* כותרת */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">מפרט טכני</h2>
          <p className="text-xl text-slate-400">כל מה שצריך לדעת על הארה סימן 1 - 3 מעגלים</p>
        </div>

        {/* מפרט ראשי בכרטיסים */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* חשמל */}
          <div className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700 hover:border-slate-600 transition-all">
            <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-white">חשמל והספק</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-slate-500">מתח כניסה</p>
                  <p className="text-lg font-bold text-white">110-240V AC</p>
                  <p className="text-sm text-slate-400">50~60Hz</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-slate-500">הספק מרבי</p>
                  <p className="text-lg font-bold text-white">500W</p>
                  <p className="text-sm text-slate-400">לכל מעגל</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-slate-500">יעילות אנרגטית</p>
                  <p className="text-lg font-bold text-white">95%+</p>
                </div>
              </div>
            </div>
          </div>

          {/* תקשורת */}
          <div className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700 hover:border-slate-600 transition-all">
            <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mb-6">
              <Wifi className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-white">קישוריות</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-slate-500">Wi-Fi</p>
                  <p className="text-lg font-bold text-white">2.4GHz</p>
                  <p className="text-sm text-slate-400">802.11 b/g/n</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-slate-500">פרוטוקולים</p>
                  <p className="text-lg font-bold text-white">TUYA Smart</p>
                  <p className="text-sm text-slate-400">עדכון OTA</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-slate-500">טווח</p>
                  <p className="text-lg font-bold text-white">עד 50 מטר</p>
                </div>
              </div>
            </div>
          </div>

          {/* תקנים */}
          <div className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700 hover:border-slate-600 transition-all">
            <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-white">אישורים ותקנים</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-slate-500">תקן ישראלי</p>
                  <p className="text-lg font-bold text-white">IS 33 חלק 1</p>
                  <p className="text-sm text-slate-400">מאושר מכון התקנים</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-slate-500">אישורי בטיחות</p>
                  <p className="text-lg font-bold text-white">CE, RoHS</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-slate-500">אחריות</p>
                  <p className="text-lg font-bold text-white">3 שנים</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* מידות והתקנה */}
        <div className="bg-slate-800 rounded-3xl p-10 mb-12 border border-slate-700 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Maximize2 className="w-10 h-10 text-white" />
                <h3 className="text-3xl font-bold text-white">מידות והתקנה</h3>
              </div>
              <div className="space-y-6">
                <div className="bg-slate-700/50 rounded-xl p-5 border border-slate-600">
                  <p className="text-slate-400 text-sm mb-2">מידות פאנל</p>
                  <p className="text-2xl font-bold text-white">124 × 90 × 2 mm</p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-5 border border-slate-600">
                  <p className="text-slate-400 text-sm mb-2">קופסת התקנה</p>
                  <p className="text-2xl font-bold text-white">3-4 מודול סטנדרטי</p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-5 border border-slate-600">
                  <p className="text-slate-400 text-sm mb-2">עומק נדרש</p>
                  <p className="text-2xl font-bold text-white">מינימום 35mm</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-700/30 rounded-2xl p-8 text-center border border-slate-600">
                <Home className="w-32 h-32 mx-auto mb-4 text-slate-500" />
                <p className="text-lg mb-2 text-white">התקנה קלה ומהירה</p>
                <p className="text-slate-400">מתאים לכל קופסת חיבורים ישראלית סטנדרטית</p>
              </div>
            </div>
          </div>
        </div>

        {/* אפשרויות שליטה */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">אפשרויות שליטה</h3>
            <p className="text-lg text-slate-400">שלושה דרכים לשלוט - בחר מה שנוח לך</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700 text-center hover:border-slate-600 transition-all">
              <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Radio className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">מתג קיר</h4>
              <p className="text-slate-400 mb-4">לחיצה פיזית על פאנל הזכוכית</p>
              <div className="space-y-2 text-sm text-slate-500">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-slate-400" />
                  <span>רגיש למגע</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-slate-400" />
                  <span>נורית LED כחולה</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700 text-center hover:border-slate-600 transition-all">
              <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">אפליקציה</h4>
              <p className="text-slate-400 mb-4">שליטה מלאה מכל מקום</p>
              <div className="space-y-2 text-sm text-slate-500">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-slate-400" />
                  <span>עברית ואנגלית</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-slate-400" />
                  <span>iOS ו-Android</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700 text-center hover:border-slate-600 transition-all">
              <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Radio className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">שליטה קולית</h4>
              <p className="text-slate-400 mb-4">פקודות קול פשוטות</p>
              <div className="space-y-2 text-sm text-slate-500">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-slate-400" />
                  <span>Amazon Alexa</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-slate-400" />
                  <span>Google Assistant</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* תכונות מתקדמות */}
        <div className="bg-black/30 rounded-3xl p-10 border border-slate-800">
          <h3 className="text-3xl font-bold mb-8 text-center text-white">תכונות מתקדמות</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-700">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold mb-2 text-white">טיימרים חכמים</h4>
              <p className="text-sm text-slate-400">תזמון הדלקה וכיבוי אוטומטי</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-700">
                <Battery className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold mb-2 text-white">זיכרון מצב</h4>
              <p className="text-sm text-slate-400">שמירת הגדרות אחרונות</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-700">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold mb-2 text-white">ללא ריצודים</h4>
              <p className="text-sm text-slate-400">פטנט ישראלי ייחודי</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-700">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold mb-2 text-white">3 צבעים</h4>
              <p className="text-sm text-slate-400">שחור, לבן, אפור</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;