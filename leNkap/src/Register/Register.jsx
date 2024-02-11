import React from 'react'
import LoginForm from '../Login/LoginForm'


const Register = () => {
  return (
    <div className='wrapper'>
        <form action="submit">
        <h1>Register</h1>
        <div className="input-box">
            <input type="text" placeholder='Username' required />
        </div>
        <div className="input-box">
            <input type="password" placeholder='Enter Password' required />
        </div>
        <div className="input-box">
            <input type="password" placeholder='Confirm Password' required />
        </div>
        <div className="btn">
            <button type='submit'><a href='../Home/index.jsx'>Register</a></button>
        </div>
        <div className="account-exist">
            <p>Already have an account? <a href='../Login/LoginForm.jsx'>Login</a></p>
        </div>
        </form>
    </div>
  )
}

export default Register