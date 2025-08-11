import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function UserManagement() {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();



  useEffect(() => { fetchUsers() }, []);

  //fetch the data from the backend
  const fetchUsers = () => {
    axios.get('http://localhost:8080/getAllUsers')
      .then(res => {
        setUsers(res.data);
      })
      .catch(() => console.log('Error'));
  }

  // delete the data
  const deleteUsers = (id) => {
    axios.get('http://localhost:8080/deleteUsers', {
      params: { id: id }
    })
      .then(fetchUsers)
      .catch(console.error);
  }


  const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse"
  };

  const cellStyle = {
    border: "1px solid black",
    padding: "8px",
    textAlign: "left"

  };

  return (
    <div>
      <h1>User Management</h1>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}>ID</th>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Email</th>
            <th style={cellStyle}>DOB</th>
            <th style={cellStyle}>gender</th>
            <th style={cellStyle}>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map(p => (
            <tr key={p.id}>
              <td style={cellStyle}>{p.id}</td>
              <td style={cellStyle}>{p.username}</td>
              <td style={cellStyle}>{p.email}</td>
              <td style={cellStyle}>{p.dob}</td>
              <td style={cellStyle}>{p.gender}</td>
              <td style={cellStyle}>{p.role}</td>
              <td>
                <button onClick={() => navigate('/updateUser', {state:{ p }})}>Update</button>

                <button onClick={() => deleteUsers(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}
