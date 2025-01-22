import React, { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import getAuth from "./utilities"
import Search from "./search"


function App(props) {
//search states
  const [accessToken, setAccessToken] = useState("")
  const [authCode, setAuthCode] = useState('')

// componet mounts and refers to utilities function to get auth WORKS
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

const authUrl = "https://accounts.spotify.com/authorize"
const redirectUrl = "http://localhost:5173/"
const scopes = "playlist-modify-public playlist-modify-private user-library-modify user-library-read"
const clientId = "457c90c1dcd144308ec4a560e31d731d"
const clientSecret = "87423b39aac249beba4de5e4b3f48670"

let url = authUrl;
url+= "?client_id="+ clientId;
url+="&response_type=code";
url+="&redirect_uri=" + encodeURI(redirectUrl);
url+="&show_dialog=true";
url+="&scope=" +scopes;
console.log(url)
window.location.href = url



  }

  const handelLoginButton = (e) => {
  
    e.preventDefault()
    getUserProfile()
  }


  return (
    <div className="App">
      <button onClick={handelLoginButton}>Sign In</button>
   <Search/>


    </div>
  );

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
