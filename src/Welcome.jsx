import React from 'react'
import { Link } from 'react-router-dom'


export default function Welcome() {
  return (
    <div className='welcome-page'>
      <div className="welcome-container">
        <h1 className="welcome-title">Welcome to SalesSavvy</h1>
        <div className="welcome-links">
          <Link className="welcome-btn" to={'/signUp'}>SignUp</Link> <br /><br />
          <Link className="welcome-btn secondary" to={'/signIn'}>SignIn</Link></div>
      </div>
    </div>
  )
}
