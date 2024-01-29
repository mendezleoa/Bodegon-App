import React, { useState } from 'react';
import ProductForm from './ProductForm.js';
import ProductList from './ProductList.js';

function App() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);

  const [search, setSearch] = useState('');

  const addProduct = (product) => {
    const newProducts = [...products];
    newProducts.push(product);
    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
  };

  const editProduct = (index, product) => {
    const newProducts = [...products];
    newProducts[index] = product;
    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
  };

  const deleteProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
  };

  const filterProducts = (search) => {
    if (search === '') {
      return products;
    }
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.price.toString().includes(search)
    );
    return filteredProducts;
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
        <input type="text" placeholder="Buscar por nombre, categoría o precio" onChange={(e) => setSearch(e.target.value)} />
        <div className='container m-4' id="table">
        <ProductList products={filterProducts(search)} editProduct={editProduct} deleteProduct={deleteProduct} />
        </div>
        <ProductForm addProduct={addProduct} />
      </main>
    </>
  );
}

export default App;
