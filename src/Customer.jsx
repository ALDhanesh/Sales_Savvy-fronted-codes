import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './style.css';

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
    <div className="customer-container">
      <h1>Customer</h1>
      <div className="product-grid">
        {products && products.map(p => (
          <div className="product-card" key={p.id}>

            <div className="product-details">
              <p><strong>ID:</strong> {p.id}</p>

              <p><strong>Name:</strong> {p.name}</p>

              <p><strong>Description:</strong> {p.description}</p>

              <p className="price"><strong>Price:</strong> ₹{p.price}</p>

              <p className="category"><strong>Category:</strong> {p.category}</p>
            </div>


            {p.image && (
              <img
                src={p.image}
                alt={p.name}
                className='product-image'
              style={{ width: '200px', marginTop: '10px' }}
              />
            )}
            <button type='submit'>Add to cart</button>
          </div>
          
        ))}
      </div>

    </div>
  )
}
