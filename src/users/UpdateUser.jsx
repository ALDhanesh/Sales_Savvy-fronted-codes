import axios from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export default function UpdateUser() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.p;

  const [username, setUsername] = useState(user.username || '');
  const [email, setEmail] = useState(user.email || '');
  const [gender, setGender] = useState(user.gender|| '');
  const [dob, setDob] = useState(user.dob || '');
  const [role, setRole] = useState(user.role || '');

  const updateClick = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/updateUser' , {
      id: user.id, username, email, gender, dob, role
    })
    .then(() => {
      alert("successfully updated");
      navigate('/userManagement');
    })
    .catch(console.error);
  }
  return (
    <div>
      <h3>Update User Information</h3>

      <form onSubmit={updateClick}>
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
          <div className="radio-group">
            <label htmlFor="gender">Gender:</label>
            <label><input type="radio" id='gender' name="gender" value="MALE" checked={gender === "MALE"} onChange={e => setGender(e.target.value)} required /> Male</label>
            <label><input type="radio" id='gender' name="gender" value="FEMALE" checked={gender === "FEMALE"} onChange={e => setGender(e.target.value)} /> Female</label>
            <label><input type="radio" id='gender' name="gender" value="OTHER" checked={gender === "OTHERS"} onChange={e => setGender(e.target.value)} /> Other</label>
          </div>
          <br />
          <div>
            <label htmlFor="dob">Date of Birth: </label>
            <input type="date" id='dob' value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>

          <br />
          <div className="radio-group">
            <label htmlFor="role">Role:</label>
            <label><input type="radio" id='role' name="role" value="admin" checked={role === "admin"} onChange={e => setRole(e.target.value)}/> Admin</label>
            <label><input type="radio" id='role' name="role" value="customer" checked={role === "customer"} onChange={e => setRole(e.target.value)} /> Customer</label> <br />
          </div>
          <br />
          <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
