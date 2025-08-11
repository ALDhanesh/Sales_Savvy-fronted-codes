import React, { useState } from 'react'
import axios from 'axios';

export default function Delete_product() {

  const [id, setId] = useState('');
  const [product, setProduct] = useState(null);

  const handleClick = (e) => {
      e.preventDefault();
  
      axios.get('http://localhost:8080/searchProduct', {
        params: { id: id }
      })
        .then((res) => {
          setProduct(res.data)
        })
        .catch(() => alert('error'));
  }

  const deleteItem = (e) => {
    e.preventDefault();

    axios.get('http://localhost:8080/deleteProduct', {
        params: { id: id }
      })
        .then((res) => {
          alert(res.data);
          setProduct(null);
        })
        .catch(() => alert('error'));
  }

  return (
    <div>
      <h3>Delete product</h3>

      <label htmlFor="id">Enter Id: </label>
      <input type="text" value={id} id='id' onChange={(e) => setId(e.target.value)} /> <br /><br />
      <button type='submit' onClick={handleClick}>Search</button>

      {/* product */}
      {product && (
        <div style={{ marginTop: '20px' }}>

          <h1>Product Details</h1>
          <p><strong>ID:</strong> {product.id}</p>

          <p><strong>Name:</strong> {product.name}</p>

          <p><strong>Description:</strong> {product.description}</p>

          <p><strong>Price:</strong> ₹{product.price}</p>

          <p><strong>Category:</strong> {product.category}</p>

          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '200px', marginTop: '10px' }}
            />
          )}
          <br />

          <button onClick={deleteItem}>Delete Item</button>
        </div>
      )}
    </div>
  )
}
