import React from 'react'
import { Image} from 'react'
// import GoogleSignup from '../componets/googleSignup'

export default function CreateAccountScreen() {
  return (
    <>
        <div className='Profile'>
            <Image source={require('../assets/Kitty-Logo.png')}/>
            <Text>Sheyrhon</Text>
        </div>
        <div className='accInfo'>
            <Text>Create an account</Text>
            <Text>Get started by creating an account to secure your expenses</Text>
        </div>
        {/* <div className='signUpbtn'>
            <GoogleSignup/>
        </div> */}
    </>
  )
}

