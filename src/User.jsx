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

  useEffect(() => {
    const fetchToken = async () => {
      try{
      const token = await getAuth()
      setAccessToken(token)
      } catch(error) {
        console.log('Fetch Error:', error)
      }
    };
    fetchToken()
  },[])

  async function AuthApp() {

    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: ,
        redirect_uri: ,
        grant_type: 'authorization_code'
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
      }
    
  }



const handleloginChange = (e) => {
    e.preventDefault()

        
    }

    const handleButtonChange = (e) => {
       e.preventDefault()

        
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
    )
}
export default UserProfile;