import React, {useState, useEffect} from "react";
import {getAuth} from "./utilities"

function UserProfile(){

    const [userEmail, setUserEmail] = useState('')
    const [access_token, setAccessToken] = useState('')  
 


        // const clientId = "CLIENT_ID" 
        // const clientSecret = "CLIENT
        // const authEndUrl ="https://accounts.spotify.com/authorize"
        // const redirectUri = "http://localhost:5173/"
        // const scopes = ["playlist-modify-public"]

async function getUserProfile() {

  const redirect_uri = "http://localhost:5173/"
  const clientId = "457c90c1dcd144308ec4a560e31d731d"
  const client_secret = "87423b39aac249beba4de5e4b3f48670"
  const authURL = "https://accounts.spotify.com/authorize"
  const scope = ["playlist-modify-public","user-read-private", "user-read-email"]
  const redirectUri = 'http://localhost:8080';
  const authUrl = new URL("https://accounts.spotify.com/authorize")
  
  // generated in the previous step
  window.localStorage.setItem('code_verifier', codeVerifier);
  
  const params =  {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirect_uri,

  }
  
  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();

}

    const handleButtonChange = (e) => {
       e.preventDefault()
       setUserEmail(e.target.value)
       getUserProfile()
        console.log('button clicked ')

        
    }
     





    return (
        <div> 
        <form className="loginForm" >
          <label id="userName" htmlFor="userName" ></label>
        <input type="username" id="username"/>
          <button onClick={handleButtonChange} >Login</button>
      </form>
      <div className="profileContainer"></div>
    </div>
    )}
export default UserProfile;