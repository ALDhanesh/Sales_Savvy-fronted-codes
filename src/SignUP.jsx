import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./style/signUp.css";


export default function SignUP() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [role, setRole] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/signUp', { username, email, password, dob, gender, role })
      .then(res => {
        if (res.data === "success") {
          alert('Sign up: User created successfully!');
          navigate('/signIn');
        }
        else {
          alert('Username already exists!');
        }
      }).catch(
        () => alert('Error signed up - check the console')
      )
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h3>Create Account</h3>

        <form onSubmit={handleClick}>
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email: </label>
            <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <br />
          <div className="radio-group">
            <label>Gender:</label>
            <label htmlFor='male'><input type="radio" id='male' name="gender" value="MALE" onChange={e => setGender(e.target.value)} required /> Male</label>
            <label htmlFor='female'><input type="radio" id='female' name="gender" value="FEMALE" onChange={e => setGender(e.target.value)} /> Female</label>
            <label htmlFor='others'><input type="radio" id='others' name="gender" value="OTHER" onChange={e => setGender(e.target.value)} /> Others</label>
          </div>
          <br />
          <div>
            <label htmlFor="dob">Date of Birth: </label>
            <input type="date" id='dob' value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>

          <br />
          <div className="radio-group">
            <label>Role:</label>
            <label htmlFor="admin"><input type="radio" id='admin' name="role" value="admin" onChange={e => setRole(e.target.value)} required /> Admin</label>
            <label htmlFor="customer"><input type="radio" id='customer' name="role" value="customer" onChange={e => setRole(e.target.value)} /> Customer</label>
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}
