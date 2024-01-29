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
      <form className="product-form" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" name="name" onChange={handleChange} />
        <label>Categoría</label>
        <input type="text" name="category" onChange={handleChange} />
        <label>Precio</label>
        <input type="number" name="price" onChange={handleChange} />
        <label>Stock</label>
        <input type="number" name="stock" onChange={handleChange} />
        <button type="submit">Agregar</button>
      </form>
    );
  }
  
  export default ProductForm;