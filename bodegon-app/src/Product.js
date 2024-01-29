import React, { useState } from 'react';

function Product({ product, index, editProduct, deleteProduct }) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = (value) => {
    setIsEditing(value);
  };

  return (
    <tr className="product sm:text-lg">
      {isEditing ? (
        <>
          <td>
            <p>N/a</p>
          </td>
          <td>
            <input className='bg-[#B5FFFF] border border-[#239089] text-gray-900 text-sm rounded-lg w-30 py-1 px-4' type="text" defaultValue={product.name} />
          </td>
          <td>
            <input className='bg-[#B5FFFF] border border-[#239089] text-gray-900 text-sm rounded-lg w-30 py-1 px-4' type="text" defaultValue={product.category} />
          </td>
          <td>
            <input className='bg-[#B5FFFF] border border-[#239089] text-gray-900 text-sm rounded-lg w-20 py-1 px-4' type="number" defaultValue={product.price} />
          </td>
          <td>
            <input className='bg-[#B5FFFF] border border-[#239089] text-gray-900 text-sm rounded-lg w-20 py-1 px-4' type="number" defaultValue={product.existencia} />
          </td>
          <td>
            <button className='text-gray-900 text-sm bg-[#F8A6A6] border border-[#F66E6E] mx-2 rounded-md sm:w-auto py-1 px-3 w-full text-center' onClick={() => toggleEdit(false)}>Cancelar</button>
            <button className='text-gray-900 text-sm bg-[#C4F1B9] border border-[#A5EB94] mx-2 rounded-md sm:w-auto py-1 px-3 w-full text-center' onClick={() => editProduct(index, product)}>Guardar</button>
          </td>
        </>
      ) : (
        <>
          <td>{index+1}</td>
          <td>{product.name}</td>
          <td>{product.category}</td>
          <td>{product.price}</td>
          <td>{product.existencia}</td>
          <td>
            <button className='text-gray-900 text-sm bg-[#8AE0DB] border border-[#239089] mx-2 rounded-md sm:w-auto py-1 px-3 w-full text-center' onClick={() => toggleEdit(true)}>Editar</button>
            <button className='text-gray-900 text-sm bg-[#F8A6A6] border border-[#F66E6E] mx-2 rounded-md sm:w-auto py-1 px-3 w-full text-center' onClick={() => deleteProduct(index)}>Eliminar</button>
          </td>
        </>
      )}
    </tr>
  );
}

export default Product;