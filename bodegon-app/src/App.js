import React, { useState } from 'react';
import ProductForm from './ProductForm.js';
import './tailwind.css';

function App() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);

  const addProduct = (product) => {
    const newProducts = [...products];
    newProducts.push(product);
    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
  };
  return (
    <>
      <nav className="navbar">
        <h1>Bodegón Pablo</h1>
      </nav>
      <main className="main">
        <h1 className="text-3xl text-emerald-950 font-bold">
          Aqui va un titulo para la tabla.
        </h1>
        <div id="table">
          <p>Mucho texto donde van las talbas.</p>
        </div>
        <ProductForm addProduct={addProduct} />
      </main>
    </>
  );
}

export default App;
