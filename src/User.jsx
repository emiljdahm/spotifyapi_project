import React, {useState, useEffect} from "react";

function UserProfile(){

    const [userEmail, setUserEmail] = useState('')
    const [access_token, setAccessToken] = useState('')  

        const clientId = "457c90c1dcd144308ec4a560e31d731d"
        const clientSecret = "87423b39aac249beba4de5e4b3f48670"
        // const authEndUrl ="https://accounts.spotify.com/authorize"
        // const redirectUri = "http://localhost:5173/"
        // const scopes = ["playlist-modify-public"]

useEffect(() => {
    var authParams = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body: 
        'grant_type=client_credentials&client_id='+clientId+"&client_secret="+clientSecret
    }
    fetch(`https://accounts.spotify.com/api/token`, authParams)
    .then(result => result.json())//always add ()
    .then(data => setAccessToken(data.access_token))
    .catch(error => console.log(error))
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