import React, {useState, useEffect} from "react";
import {getAuth} from "./utilities"

function UserProfile(){

    const [userEmail, setUserEmail] = useState('')
    const [access_token, setAccessToken] = useState('')  

     
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