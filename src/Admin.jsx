import React from 'react'
import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
        <h1>Welcome to Admin page</h1>
        <Link to={'/productManagement'}>Product Management</Link> <br /> <br />
        <Link to={'/userManagement'}>User Management</Link>
    </div>
  )
}
