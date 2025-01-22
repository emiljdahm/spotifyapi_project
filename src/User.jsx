import React from 'react'
import {getAuth} from './utilities'



async function getUserProfile(){

  //const token = getAuth()

  const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  }
  
  const codeVerifier  = generateRandomString(64);

  const sha256 = async (plain) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
  }

  const hashed = await sha256(codeVerifier)
  const codeChallenge = base64encode(hashed);




return (
  <button>Login</button>
)
}

export default getUserProfile