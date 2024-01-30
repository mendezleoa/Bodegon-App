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
      <nav className="navbar bg-[#239089] py-6 px-8">
        <h1 className='text-2xl font-semibold'>Bodegón UVM</h1>
      </nav>
      <main className="main mx-2 my-6">
        <h1 className="text-3xl text-emerald-950 font-semibold ml-5 mb-2">
        Gestión de productos
        </h1>
        <p className='ms-5 mb-8'>Ingresa los datos que quieres agregar y modificalos dentro de la tabla.</p>
        <div className='mx-5 flex flex-col'>
          <input className='bg-[#B5FFFF] border border-[#239089] text-gray-900 placeholder-[#545454] text-sm rounded-lg max-w-[28rem] w-70 py-1.5 px-4 flex-none grow-0' type="text" placeholder="Buscar por nombre, categoría o precio" onChange={(e) => setSearch(e.target.value)} />
          <div className='container m-4 flex-1 bg-[#5DC1B9] p-10 rounded-2xl overflow-x-auto align-center' id="table">
            <ProductList products={filterProducts(search)} editProduct={editProduct} deleteProduct={deleteProduct} />
          </div>
        </div>
        <div className='my-5'>
          <h2 className='text-lg mb-2 ml-3'>Agregar productos</h2>
          <ProductForm addProduct={addProduct} />
        </div>
      </main>
    </>
  );
}

export default App;
