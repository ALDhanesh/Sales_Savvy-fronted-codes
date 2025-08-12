import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


export default function Update_product() {

  const location = useLocation();
  const product = location.state?.p;
  const navigate = useNavigate();

  const [name, setName] = useState(product.name || '');
  const [description, setDescription] = useState(product.description || '');
  const [price, setPrice] = useState(product.price || '');
  const [image, setImage] = useState(product.image || '');
  const [category, setCategory] = useState(product.category ||'');

  const updateClick = (e) => {
        e.preventDefault();
        const data = {
            id: product.id,
            name,
            description,
            price,
            image,
            category
        };

        axios.post('http://localhost:8080/updateProduct', data)
        .then((res) => {
          alert(res.data)
          navigate('/productManagement')
        })
        .catch(() => alert('error adding product!'));
    }

  return (
    <div>
      {product && (
        <div>

          <h1>Update Product Details</h1>
          <p><strong>ID:</strong> {product.id}</p>

          <strong>Name:</strong> <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />

          <strong>Description:</strong> <br /><textarea type="text" value={description} rows="5" cols="50" onChange={(e) => setDescription(e.target.value)}></textarea> <br /><br />

          <strong>Price:</strong> <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /> <br /><br />

          <strong>Category:</strong> <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} /> <br /><br />

          <strong>Image Url:</strong> <input type="text" value={image} onChange={(e) => setImage(e.target.value)} /> <br /><br />

          {image && (
            <img
              src={image}
              alt={name}
              style={{ width: '200px', marginTop: '10px' }}
            />
          )}
          <br />
          <button onClick={updateClick}>Update product</button>
        </div>
      )}
    </div>
  )
}
