import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function SignIn() {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/signIn', { username, password })
            .then(res => {
                if (res.data === 'admin') {
                    navigate('/admin');
                } else if (res.data === 'customer') {
                    navigate('/customer');
                } else {
                    alert(res.data);
                }
            })
            .catch(
                () => alert('Error signed in - check the console')
            )
    }
    return (
        <div class = "container">
            <h3>Sign In</h3>

            <form className="form-container" onSubmit={handleClick}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} /> <br /><br />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br /><br />

                <button className="btn btn-primary" type='submit'>Log in</button>
            </form>
        </div>
    )
}
