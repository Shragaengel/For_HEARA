import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from './components/Hero';
import InteractiveDemo from './components/InteractiveDemo';
import TechnicalSpecs from './components/TechnicalSpecs';  // ← חדש
import Features from './components/Features';              // ← חדש
import ProductList from './components/ProductList';
import CTA from './components/CTA';                        // ← חדש
import ContactForm from './components/ContactForm';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white" dir="rtl">
      <Hero />
      <InteractiveDemo />
      <TechnicalSpecs />     {/* ← חדש */}
      <Features />           {/* ← חדש */}
      <ProductList products={products} />
      <CTA />                {/* ← חדש */}
      <ContactForm />
    </div>
  );
}

export default App;




