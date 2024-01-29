import React, { useState } from 'react';

function Product({ product, index, editProduct, deleteProduct }) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = (value) => {
    setIsEditing(value);
  };

  return (
    <tr className="product">
      {isEditing ? (
        <>
          <td>
            <p>N/a</p>
          </td>
          <td>
            <input type="text" defaultValue={product.name} />
          </td>
          <td>
            <input type="text" defaultValue={product.category} />
          </td>
          <td>
            <input type="number" defaultValue={product.price} />
          </td>
          <td>
            <input type="number" defaultValue={product.existencia} />
          </td>
          <td>
            <button onClick={() => toggleEdit(false)}>Cancelar</button>
            <button onClick={() => editProduct(index, product)}>Guardar</button>
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
            <button onClick={() => toggleEdit(true)}>Editar</button>
            <button onClick={() => deleteProduct(index)}>Eliminar</button>
          </td>
        </>
      )}
    </tr>
  );
}

export default Product;