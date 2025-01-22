import React, { useEffect, useState } from 'react'
import { getAuth } from './utilities'


//page loads




//const [loggedIn, setLoggedIn] = useState(false)

function GetUserProfile(){

  
const[auth, setAuth] = useState('')

useEffect(() => {
  if (window.location.search.length > 0) {
    const code = new URLSearchParams(window.location.search).get('code');
    getAuth(code)
      .then((data) => {
        console.log("auth code read: ", data);
        setAuth(data.access_token);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}, []);




  const AuthUrl = "https://accounts.spotify.com/authorize"
  const redirect_uri = "http://localhost:5173/"
  const scopes = "playlist-modify-private playlist-modify-public user-library-modify user-library-read"
  let clientId = "457c90c1dcd144308ec4a560e31d731d"
  let clientSecret = "87423b39aac249beba4de5e4b3f48670"
  const TOKEN = "https://accounts.spotify.com/api/token"

  const onPageLoad = () => {
    clientId = localStorage.getItem('clientId')
    clientSecret = localStorage.getItem('clientSecret') 
    if (window.location.search.length > 0) {
      handleRedirect()
    }
   }
   const handleRedirect = () => {
    let code = getCode()
    fetchAccessToken

   }
   const getCode = () => {
    let code = null
    const queryString = window.location.search
    if(queryString.length > 0){
      const urlParams = new URLSearchParams(queryString)
      code = urlParams.get('code')
    }
    return code
   }
function fetchAccessToken(code){

  let body = "grant_type=authorization_code";
  body += "&code=" + code;
  body += "&redirect_uri=" + encodeURI(redirect_uri);
  body += "&client_id=" + clientId;
  body += "&client_secret=" + clientSecret;
  callAuthApi(body);
  }
  function callAuthApi(body){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", TOKEN, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Authorization", "Basic " + btoa(clientId + ":" + clientSecret));
    xhr.send(body);
    xhr.onload = handleAuthResponse;
  }

  function handleAuthResponse(){
    if(this.status === 200){
      var data = JSON.parse(this.responseText);
      console.log(data);
      setAuth(data.access_token);
    } else {
      console.log(this.responseText);
    }
  };

const handleButtonClick = (e) => {
  e.preventDefault();
  window.location.href = `${AuthUrl}?client_id=${clientId}&response_type=code&redirect_uri=${redirect_uri}&scope=${scopes}`
}


return (
  <div>

  <button onClick={handleButtonClick}>Login</button>

  </div>
)
}

export default GetUserProfile