import React from 'react'
import { Link } from 'react-router-dom'
import SplashScreen from '../Screens/splashScreen';
import CreateAccountScreen from '../Screens/createAccountScreen';

export default function NavBar() {
  return (
    <nav>
        <Link to='/' >SplashScreen</Link>
        <Link to='/src/Screens/createAccountScreen.jsx'>CreateAccountScreen</Link>
    </nav>
  )
}
