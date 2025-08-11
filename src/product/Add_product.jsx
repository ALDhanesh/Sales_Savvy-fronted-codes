import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Add_product() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        const data = {
            name,
            description,
            price,
            image,
            category
        };

        axios.post('http://localhost:8080/addProduct', {name, description, price:parseInt(price, 10), image, category})
        .then(() => alert('product added!'))
        .catch(() => alert('error adding product!'));
    }

    return (
        <div>
            <h3>Add product below</h3>

            <form onSubmit={handleClick}>
                <div>
                    <label htmlFor="Product Name:">Name:</label>
                    <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <br />
                
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" id='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <br />

                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="text" id='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <br />

                <div>
                    <label htmlFor="photo">Image Url:</label>
                    <input
                        type="text"
                        name="photo"
                        value={image}
                        id='photo'
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <br />

                <div>
                    <label htmlFor="category">Category: </label>
                    <input type="text" name='category' value={category} onChange={(e) => setCategory(e.target.value)}/>
                </div>
                <br />

                <button type='submit'>Add Product</button>
            </form>
        </div>
    )
}
