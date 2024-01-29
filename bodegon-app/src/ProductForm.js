import React, { useState } from 'react';

function ProductForm({ addProduct }) {

  const [product, setProduct] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newProduct = { ...product };
    newProduct[name] = value;
    setProduct(newProduct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({});
    e.target.reset();
  };

  return (
    <form className="container mx-auto bg-[#5DC1B9] rounded-xl p-5 product-form" onSubmit={handleSubmit}>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <label className='p-2 mx-3'>Nombre:</label>
          <input className='bg-[#B5FFFF] border border-[#239089] text-gray-900 text-sm rounded-lg w-80' type="text" name="name" onChange={handleChange} />
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <label className='p-2 mx-3'>Categoría:</label>
          <input className='bg-[#B5FFFF] border border-[#239089] text-gray-900 text-sm rounded-lg w-80' type="text" name="category" onChange={handleChange} />
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <label className='p-2 mx-3'>Precio:</label>
          <input className='bg-[#B5FFFF] border border-[#239089] text-gray-900 text-sm rounded-lg w-40' type="number" name="price" onChange={handleChange} />
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <label className='p-2 mx-3'>Existencia:</label>
          <input className='bg-[#B5FFFF] border border-[#239089] text-gray-900 text-sm rounded-lg w-40' type="number" name="existencia" onChange={handleChange} />
        </div>
      </div>
      <button className='text-gray-900 bg-[#8AE0DB] border border-[#239089] rounded-md sm:w-auto py-1 px-3 w-full text-center' type="submit">Agregar</button>
    </form>
  );
}

export default ProductForm;