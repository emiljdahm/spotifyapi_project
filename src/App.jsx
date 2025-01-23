import React, { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import getAuth from "./utilities"
import Search from "./search"


function App(props) {
//search states
  const [accessToken, setAccessToken] = useState("")
  const [authCode, setAuthCode] = useState('')
  const[access_token, setAccess_Token] = useState('')
  const [refresh_token, setRefreshToken] = useState('')


// componet mounts and refers to utilities function to get auth WORKS
// componet mounts and refers to utilities function to get auth
  // useEffect(() => {
  //   const fetchToken = async () => {
  //     try{
  //     const token = await getAuth()
  //     setAccessToken(token)
  //     } catch(error) {
  //       console.log('Fetch Error:', error)
  //     }
  //   };
  //   fetchToken()
  // },[])


async function getUserProfile(){
//base data
const authUrl = "https://accounts.spotify.com/authorize"
const tokenUrl = "https://accounts.spotify.com/api/token"
const redirectUrl = "http://localhost:5173/"
const scopes = "playlist-modify-public playlist-modify-private user-library-modify user-library-read"
const clientId = "457c90c1dcd144308ec4a560e31d731d"
const clientSecret = "87423b39aac249beba4de5e4b3f48670"
//build the call string
let url = authUrl;
url+= "?client_id="+ clientId;
url+="&response_type=code";
url+="&redirect_uri=" + encodeURI(redirectUrl);
url+="&show_dialog=true";
url+="&scope=" +scopes;

//console.log(url) when button clicked the url is called and user prompt to login

  function onPageLoad(){
    if(window.location.search.length > 0){
      handleRedirect();
    }

  }

  function handleRedirect(){
    let code = getCode();

  }

  function getCode(){
    let code = null;
    const querystring = window.location.search;
    if(querystring.length > 0){
      const urlParams = new URLSearchParams(querystring)
    }
    return code
  }

  function fetchAccessToken(code){
    let body = "grant_type=authorization_code";
    body+="&code="+code;
    body+="&redirect_uri="+encodeURI(redirectUrl);
    body+="client_id="+clientId;
    body+="client_secret="+clientSecret;
    callAuthApi(body)
  }
  function callAuthApi(body){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", tokenUrl, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form0urlcoded");
    xhr.setRequestHeader("Authorization", "Basic "+ btoa(clientId+":"+clientSecret));
    xhr.send(body);
    xhr.onload = handleAuthResponse
  }
  function handleAuthResponse(){
    if(this.status == 200){
      var data = JSON.parse(this.responseText);
      console.log(data)
      var data = JSON.parse(this.responseText);
      if(data.access_token != undefined){
        setAccess_Token(data.access_token)
      }
      if(data.refresh_token != undefined){
        setRefreshToken(data.refresh_token)
      }
      onPageLoad()
    }
    else {
      console.log(this.responseText)
      alert(this.responseText)
    }
  }

    



  const handelLoginButton = (e) => {
  
    e.preventDefault()
    getUserProfile()
  }

  


  return (
    <div onload="onPageLoad()" className="App">
      <button onClick={handelLoginButton}>Sign In</button>
   <Search/>


    </div>
  );

}
}
export default App;



// 1 create api token X
//set up git hub X
//setup api
//pull info form api
//parse info 
//set up componets (outline the design)
//app functionality needs
// search music
//create and listen to playlist
//rename playlist
//saveplaylist to account
//
