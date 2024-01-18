import React from 'react'
import '../../src/styles/styles.css'
import profile from '../../src/assets/profile.png'

export default function SplashScreen() {
  return (
    <div className='profile'>
       <img src={profile} alt='myImage'
       style={{width:100, height:100, justifyContent:'center'}}/>
        <h2 className='profileName'>Sheyrhon</h2>
        <p className='appName'>Your Expense Tracker</p>
    </div>
  )
}


