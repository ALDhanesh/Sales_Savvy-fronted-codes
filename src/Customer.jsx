import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Customer() {

  const [products, setProducts] = useState([]);

  useEffect(() => { fetchUsers() }, []);

  //fetch the data from the backend
  const fetchUsers = () => {
    axios.get('http://localhost:8080/getAllProducts')
      .then(res => {
        setProducts(res.data);
      })
      .catch(() => console.log('Error'));
  }

  return (
    <div>
        <h1>Customer</h1>

       {products && products.map(p => (
        <div key={p.id}>
          <p><strong>ID:</strong> {p.id}</p>

          <p><strong>Name:</strong> {p.name}</p>

          <p><strong>Description:</strong> {p.description}</p>

          <p><strong>Price:</strong> ₹{p.price}</p>

          <p><strong>Category:</strong> {p.category}</p>

          {p.image && (
            <img
              src={p.image}
              alt={p.name}
              style={{ width: '200px', marginTop: '10px' }}
            />
          )}
        </div>
       ))}
    </div>
  )
}
