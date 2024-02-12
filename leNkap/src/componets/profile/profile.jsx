import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'


const Profile = () => {
    const {username}=useContext(LoginContext)
  return (
    <div>
        <h1>Profile</h1>
        <p>Username:{username}</p>
    </div>
  )
}

export default Profile