import React, { useState } from 'react';

function Product({ product, index, editProduct, deleteProduct }) {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);
  const [existencia, setExistencia] = useState(product.existencia);
  
  const [eProduct, setEProduct] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newProduct = { ...product };
    newProduct[name] = value;
    setEProduct(newProduct);
  };


  const toggleEdit = (value) => {
    setIsEditing(value);
  };

  return (
    <tr className="product sm:text-lg">
      {isEditing ? (
        <>
          <td>
            <p>{index+1}</p>
          </td>
          <td>
            <input className='bg-[#B5FFFF] border border-[#239089] text-gray-900 text-sm rounded-lg w-30 py-1 px-4' type="text" name='name' defaultValue={product.name} onChange={handleChange} />
          </td>
          <td>
            <input className='bg-[#B5FFFF] border border-[#239089] text-gray-900 text-sm rounded-lg w-30 py-1 px-4' type="text" name='category' defaultValue={product.category} onChange={handleChange} />
          </td>
          <td>
            <input className='bg-[#B5FFFF] border border-[#239089] text-gray-900 text-sm rounded-lg w-20 py-1 px-4' type="number" name='price' defaultValue={product.price} onChange={handleChange} />
          </td>
          <td>
            <input className='bg-[#B5FFFF] border border-[#239089] text-gray-900 text-sm rounded-lg w-20 py-1 px-4' type="number" name='existencia' defaultValue={product.existencia} onChange={handleChange} />
          </td>
          <td>
            <button className='text-gray-900 text-sm bg-[#F8A6A6] border border-[#F66E6E] mx-2 rounded-md sm:w-auto py-1 px-3 w-full text-center' onClick={() => toggleEdit(false)}>Cancelar</button>
            <button className='text-gray-900 text-sm bg-[#C4F1B9] border border-[#A5EB94] mx-2 rounded-md sm:w-auto py-1 px-3 w-full text-center' onClick={() => {editProduct(index, eProduct); toggleEdit(false)}}>Guardar</button>
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