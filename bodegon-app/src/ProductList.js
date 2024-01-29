import React from 'react';
import Product from './Product';

function ProductList({ products, editProduct, deleteProduct }) {
  return (
    <table className='product-list text-center table-auto w-full'>
      <thead>
        <tr>
          <th className='px-3 py-1'>id</th>
          <th className='px-3 py-1'>Nombre</th>
          <th className='px-3 py-1'>Categoría</th>
          <th className='px-3 py-1'>Precio</th>
          <th className='px-3 py-1'>Existencia</th>
          <th className='px-3 py-1'>Acciones</th>
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