import React from 'react'
import {GoogleLogin} from 'react-google-login;'

export default function GoogleSignup() {
    const responseGoogle = (response)=>{
        console.log(response);
    }
  return (
    <GoogleLogin
    clientId = ''
    buttonText='Sign in with Google'
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={single_host_origin}
    />
        
    
  )
}
