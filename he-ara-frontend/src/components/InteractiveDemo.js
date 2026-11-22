
// import React, { useState } from 'react';
// import { Sun, Moon, Zap } from 'lucide-react';

// const InteractiveDemo = () => {
//   const [switches, setSwitches] = useState([true, false, false]);
//   const [brightness, setBrightness] = useState([80, 50, 50]);

//   // חישוב בהירות כללית
//   const roomBrightness = switches.reduce((acc, isOn, i) => 
//     isOn ? acc + brightness[i] : acc, 0
//   ) / 3;

//   const toggleSwitch = (index) => {
//     const newSwitches = [...switches];
//     newSwitches[index] = !newSwitches[index];
//     setSwitches(newSwitches);
//   };

//   const handleBrightnessChange = (index, value) => {
//     const newBrightness = [...brightness];
//     newBrightness[index] = parseInt(value);
//     setBrightness(newBrightness);
//   };

//   const toggleAll = (state) => {
//     setSwitches([state, state, state]);
//   };

//   return (
//     <section id="demo" className="py-24 bg-slate-900" dir="rtl">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold mb-4">
//             חווה את <span className="text-blue-400">החוויה</span>
//           </h2>
//           <p className="text-xl text-slate-300">
//             שלוט במתגים ותראה איך האור משנה את האווירה בזמן אמת
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">
          
//           {/* תמונת החדר עם אפקט בהירות */}
//           <div className="space-y-4">
//             <div className="relative h-[500px] rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl">
//               {/* תמונת רקע */}
//               <div 
//                 className="absolute inset-0 bg-cover bg-center transition-all duration-700"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074')`,
//                   filter: `brightness(${30 + (roomBrightness * 0.7)}%)`,
//                 }}
//               />
              
//               {/* Overlay עם גרדיאנט לאפקט תאורה */}
//               <div 
//                 className="absolute inset-0 bg-gradient-to-b from-yellow-400/0 via-yellow-400/10 to-transparent transition-opacity duration-700 pointer-events-none"
//                 style={{ 
//                   opacity: roomBrightness / 100,
//                 }}
//               />

//               {/* אפקטי אור בתקרה */}
//               <div className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-16">
//                 {switches.map((isOn, i) => (
//                   <div key={i} className="relative">
//                     {/* נורה */}
//                     <div 
//                       className={`w-6 h-6 rounded-full transition-all duration-500 ${
//                         isOn ? 'bg-yellow-300' : 'bg-slate-700'
//                       }`}
//                       style={{
//                         opacity: isOn ? brightness[i] / 100 : 0.3,
//                         boxShadow: isOn 
//                           ? `0 0 ${brightness[i] * 0.8}px ${brightness[i] * 0.4}px rgba(253, 224, 71, 0.8)`
//                           : 'none'
//                       }}
//                     />
//                     {/* קרן אור */}
//                     {isOn && (
//                       <div 
//                         className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-64 bg-gradient-to-b from-yellow-200/40 to-transparent blur-xl transition-opacity duration-500"
//                         style={{ opacity: brightness[i] / 150 }}
//                       />
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {/* מד בהירות */}
//               <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
//                 <div className="bg-black/70 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10">
//                   <p className="text-sm text-slate-400 text-center mb-1">בהירות החדר</p>
//                   <p className="text-4xl font-bold text-yellow-300 text-center">
//                     {Math.round(roomBrightness)}%
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* כפתורי שליטה מהירה */}
//             <div className="flex gap-3">
//               <button
//                 onClick={() => toggleAll(true)}
//                 className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
//               >
//                 <Sun className="w-5 h-5" />
//                 הדלק הכל
//               </button>
//               <button
//                 onClick={() => toggleAll(false)}
//                 className="flex-1 bg-slate-700 hover:bg-slate-600 px-6 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
//               >
//                 <Moon className="w-5 h-5" />
//                 כבה הכל
//               </button>
//             </div>
//           </div>

//           {/* פאנל שליטה */}
//           <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 shadow-2xl">
//             <div className="text-center mb-8">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-2xl mb-4">
//                 <Zap className="w-8 h-8 text-blue-400" />
//               </div>
//               <h3 className="text-2xl font-bold mb-2">פאנל שליטה</h3>
//               <p className="text-slate-400">הארה סימן 1 - 3 מעגלים</p>
//             </div>

//             <div className="space-y-6">
//               {switches.map((isOn, i) => (
//                 <div 
//                   key={i} 
//                   className={`bg-slate-900/50 p-6 rounded-2xl border-2 transition-all ${
//                     isOn ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : 'border-slate-700'
//                   }`}
//                 >
//                   {/* כותרת וכפתור */}
//                   <div className="flex justify-between items-center mb-5">
//                     <div className="flex items-center gap-3">
//                       <span className="text-lg font-bold">מעגל {i + 1}</span>
//                       {isOn && (
//                         <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold animate-pulse">
//                           פעיל
//                         </span>
//                       )}
//                     </div>
                    
//                     {/* מתג ON/OFF */}
//                     <button
//                       onClick={() => toggleSwitch(i)}
//                       className={`relative w-16 h-9 rounded-full transition-all duration-300 ${
//                         isOn 
//                           ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50' 
//                           : 'bg-slate-700'
//                       }`}
//                     >
//                       <div 
//                         className={`absolute top-1 w-7 h-7 bg-white rounded-full shadow-lg transition-all duration-300 ${
//                           isOn ? 'left-1' : 'right-1'
//                         }`}
//                       />
//                     </button>
//                   </div>

//                   {/* סליידר בהירות */}
//                   <div className="space-y-3">
//                     <div className="flex justify-between text-sm">
//                       <span className="text-slate-400">עוצמת אור</span>
//                       <span className={`font-bold ${isOn ? 'text-blue-300' : 'text-slate-500'}`}>
//                         {brightness[i]}%
//                       </span>
//                     </div>
                    
//                     <input
//                       type="range"
//                       min="0"
//                       max="100"
//                       value={brightness[i]}
//                       onChange={(e) => handleBrightnessChange(i, e.target.value)}
//                       disabled={!isOn}
//                       className="w-full h-3 rounded-full appearance-none cursor-pointer transition-all"
//                       style={{
//                         background: isOn
//                           ? `linear-gradient(to left, #3b82f6 0%, #3b82f6 ${brightness[i]}%, #334155 ${brightness[i]}%, #334155 100%)`
//                           : '#334155',
//                         opacity: isOn ? 1 : 0.5
//                       }}
//                     />
//                   </div>

//                   {/* נורית חיווי */}
//                   <div className="mt-4 flex items-center gap-2">
//                     <div 
//                       className={`w-3 h-3 rounded-full transition-all ${
//                         isOn 
//                           ? 'bg-blue-400 shadow-lg shadow-blue-400/80 animate-pulse' 
//                           : 'bg-slate-600'
//                       }`}
//                     />
//                     <span className="text-xs text-slate-500">נורית חיווי LED</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* הערה */}
//             <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
//               <p className="text-sm text-blue-300 text-center">
//                 💡 גרור את הסליידרים כדי לשנות את עוצמת האור בזמן אמת
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InteractiveDemo;




import React, { useState } from 'react';
import { Sun, Moon, Zap } from 'lucide-react';

const InteractiveDemo = () => {
  const [switches, setSwitches] = useState([true, false, false]);
  const [brightness, setBrightness] = useState([80, 50, 50]);

  const roomBrightness = switches.reduce((acc, isOn, i) => 
    isOn ? acc + brightness[i] : acc, 0
  ) / 3;

  const toggleSwitch = (index) => {
    const newSwitches = [...switches];
    newSwitches[index] = !newSwitches[index];
    setSwitches(newSwitches);
  };

  const handleBrightnessChange = (index, value) => {
    const newBrightness = [...brightness];
    newBrightness[index] = parseInt(value);
    setBrightness(newBrightness);
  };

  const toggleAll = (state) => {
    setSwitches([state, state, state]);
  };

  return (
    <section id="demo" className="py-24 bg-slate-900" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            חווה את <span className="text-blue-400">החוויה</span>
          </h2>
          <p className="text-xl text-slate-300">
            שלוט במתגים ותראה איך האור משנה את האווירה בזמן אמת
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* תמונת החדר */}
          <div className="space-y-4">
            <div className="relative h-[500px] rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074')`,
                  filter: `brightness(${30 + (roomBrightness * 0.7)}%)`,
                }}
              />
              
              <div 
                className="absolute inset-0 bg-gradient-to-b from-yellow-400/0 via-yellow-400/10 to-transparent transition-opacity duration-700 pointer-events-none"
                style={{ opacity: roomBrightness / 100 }}
              />

              <div className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-16">
                {switches.map((isOn, i) => (
                  <div key={i} className="relative">
                    <div 
                      className={`w-6 h-6 rounded-full transition-all duration-500 ${
                        isOn ? 'bg-yellow-300' : 'bg-slate-700'
                      }`}
                      style={{
                        opacity: isOn ? brightness[i] / 100 : 0.3,
                        boxShadow: isOn 
                          ? `0 0 ${brightness[i] * 0.8}px ${brightness[i] * 0.4}px rgba(253, 224, 71, 0.8)`
                          : 'none'
                      }}
                    />
                    {isOn && (
                      <div 
                        className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-64 bg-gradient-to-b from-yellow-200/40 to-transparent blur-xl transition-opacity duration-500"
                        style={{ opacity: brightness[i] / 150 }}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="bg-black/70 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10">
                  <p className="text-sm text-slate-400 text-center mb-1">בהירות החדר</p>
                  <p className="text-4xl font-bold text-yellow-300 text-center">
                    {Math.round(roomBrightness)}%
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => toggleAll(true)}
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
              >
                <Sun className="w-5 h-5" />
                הדלק הכל
              </button>
              <button
                onClick={() => toggleAll(false)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 px-6 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Moon className="w-5 h-5" />
                כבה הכל
              </button>
            </div>
          </div>

          {/* פאנל שליטה - קומפקטי */}
          <div className="h-[500px] bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl border border-slate-700 shadow-2xl flex flex-col">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-500/20 rounded-2xl mb-3">
                <Zap className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-1">פאנל שליטה</h3>
              <p className="text-sm text-slate-400">הארה סימן 1 - 3 מעגלים</p>
            </div>

            {/* מעגלים */}
            <div className="flex-1 space-y-4 overflow-y-auto">
              {switches.map((isOn, i) => (
                <div 
                  key={i} 
                  className={`bg-slate-900/50 p-4 rounded-2xl border-2 transition-all ${
                    isOn ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : 'border-slate-700'
                  }`}
                >
                  {/* כותרת וכפתור */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">מעגל {i + 1}</span>
                      {isOn && (
                        <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold animate-pulse">
                          פעיל
                        </span>
                      )}
                    </div>
                    
                    <button
                      onClick={() => toggleSwitch(i)}
                      className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                        isOn 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50' 
                          : 'bg-slate-700'
                      }`}
                    >
                      <div 
                        className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
                          isOn ? 'left-1' : 'right-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* סליידר */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">עוצמה</span>
                      <span className={`font-bold ${isOn ? 'text-blue-300' : 'text-slate-500'}`}>
                        {brightness[i]}%
                      </span>
                    </div>
                    
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={brightness[i]}
                      onChange={(e) => handleBrightnessChange(i, e.target.value)}
                      disabled={!isOn}
                      className="w-full h-2.5 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: isOn
                          ? `linear-gradient(to left, #3b82f6 0%, #3b82f6 ${brightness[i]}%, #334155 ${brightness[i]}%, #334155 100%)`
                          : '#334155',
                        opacity: isOn ? 1 : 0.5
                      }}
                    />
                  </div>

                  {/* נורית חיווי */}
                  <div className="mt-3 flex items-center gap-2">
                    <div 
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        isOn 
                          ? 'bg-blue-400 shadow-lg shadow-blue-400/80 animate-pulse' 
                          : 'bg-slate-600'
                      }`}
                    />
                    <span className="text-xs text-slate-500">LED</span>
                  </div>
                </div>
              ))}
            </div>

            {/* הערה */}
            <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <p className="text-xs text-blue-300 text-center">
                💡 גרור את הסליידרים לשינוי עוצמה
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;