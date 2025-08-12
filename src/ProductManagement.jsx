import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ProductManagement() {

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => { fetchProducts() }, []);
  const fetchProducts = () => {
    axios.get('http://localhost:8080/getAllProducts')
      .then(res => (
        setProducts(res.data)
      ))
      .catch(console.error);
  }

  const deleteProduct  = (id) => {
    axios.get('http://localhost:8080/deleteProduct', {
      params: { id: id }
    })
      .then(fetchProducts)
      .catch(console.error);
  }

  const tableStyle = {
    padding: '0.75rem',
    border: '1px solid black'
  };


  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button style={{ width: '125px' }} onClick={() => navigate('/add_product')}>Add New Product</button>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableStyle}>Image</th>
            <th style={tableStyle}>Name</th>
            <th style={tableStyle}>description</th>
            <th style={tableStyle}>price</th>
            <th style={tableStyle}>Operation</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((p) => (
            <tr key={p.id}>
              <td style={tableStyle}>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{ width: '150px', height: 'auto' }}
                />
              </td>

              <td style={tableStyle}>
                <p><strong>{p.name}</strong></p>
              </td>

              <td style={tableStyle}>
                <p><strong>{p.description}</strong></p>
              </td>

              <td style={tableStyle}>
                <p><strong>{p.price}</strong></p>
              </td>

              <td style={tableStyle}>
                <button onClick={() => navigate('/update_product', {state: {p}}) }>Update</button>
                <button onClick={() => deleteProduct (p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
