import React from 'react';
import Product from './Product';

function ProductList({ products, editProduct, deleteProduct }) {
  return (
    <table className='product-list'>
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Categoría</th>
          <th>Precio</th>
          <th>Existencia</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <Product key={index} product={product} index={index} editProduct={editProduct} deleteProduct={deleteProduct} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;