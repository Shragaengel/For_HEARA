import React from 'react';

const ProductList = ({ products }) => (
  <section className="py-24 px-4 bg-slate-900" id="products">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-white text-center">הקולקציה שלנו</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map(p => (
          <div key={p._id} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all shadow-lg hover:shadow-2xl">
            <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${p.imageUrl})`}}></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{p.name}</h3>
              <p className="text-white font-bold text-lg mb-4">{p.price} ₪</p>
              <ul className="text-slate-400 text-sm space-y-1">
                {p.features?.map((f, i) => <li key={i}>• {f}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductList;



