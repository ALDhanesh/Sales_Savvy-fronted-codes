import axios from 'axios';
import React, { useState } from 'react'


export default function Update_product() {

  const [id, setId] = useState('');
  const [product, setProduct] = useState(null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  //search the product
  const handleClick = (e) => {
    e.preventDefault();

    axios.get('http://localhost:8080/searchProduct', {
      params: { id: id }
    })
      .then((res) => {
        const data = res.data;
        setProduct(data)
        setName(data.name);
        setDescription(data.description);
        setPrice(data.price);
        setCategory(data.category);
        setImage(data.image);
      })
      .catch(() => alert('error'));
  }

  const updateClick = (e) => {
        e.preventDefault();
        const data = {
            id,
            name,
            description,
            price,
            image,
            category
        };

        axios.post('http://localhost:8080/updateProduct', {id, name, description, price:parseInt(price, 10), image, category})
        .then((res) => alert(res.data))
        .catch(() => alert('error adding product!'));
    }

  return (
    <div>
      <h3>Update_product</h3>
      <label htmlFor="id">Enter Id: </label>
      <input type="text" value={id} id='id' onChange={(e) => setId(e.target.value)} /> <br /><br />
      <button type='submit' onClick={handleClick}>Search</button>

      {/* product */}
      {product && (
        <div style={{ marginTop: '20px' }}>

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
