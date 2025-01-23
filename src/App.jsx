import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import Search from './search';

function App(props) {
  const [accessToken, setAccessToken] = useState('');
  const [refresh_token, setRefreshToken] = useState('')

  const authUrl = 'https://accounts.spotify.com/authorize';
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const redirectUrl = 'http://localhost:5173/';
  const scopes = 'playlist-modify-public playlist-modify-private user-library-modify user-library-read';
  const clientId = '457c90c1dcd144308ec4a560e31d731d';
  const clientSecret = '87423b39aac249beba4de5e4b3f48670';

  useEffect(() => {
    if (window.location.search.length > 0) {
      handleRedirect();
    }
  }, []);

  //document.getElementById('LoginButton').style.display = "none";

  useEffect(() => {
    if (accessToken !== "") {
      // Select the element correctly
      const loginButton = document.getElementsByClassName("loginButton")[0]; // Access the first element of the class list
      
      if (loginButton) {
        // Hide the button
        loginButton.style.display = "none";
  
      }
    }
  }, [accessToken])



  function getCode() {
    const querystring = window.location.search;
    if (querystring.length > 0) {
      const urlParams = new URLSearchParams(querystring);
      return urlParams.get('code');
    }
    return null;
  }

  function handleRedirect() {
    const code = getCode();
    if (code) {
      fetchAccessToken(code);
    }
  }

  function fetchAccessToken(code) {
    const body = `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURI(
      redirectUrl
    )}&client_id=${clientId}&client_secret=${clientSecret}`;
    callAuthApi(body);
  }

  function callAuthApi(body) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', tokenUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Basic ' + btoa(`${clientId}:${clientSecret}`));
    xhr.send(body);
    xhr.onload = handleAuthResponse;
  }

  function handleAuthResponse() {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      if (data.access_token) {
        setAccessToken(data.access_token);
        localStorage.setItem('access_token', data.access_token);
      }
      if (data.refresh_token) {
        localStorage.setItem('refresh_token', data.refresh_token);
        setRefreshToken(data.refresh_token)

      }
    } else {
      console.error(this.responseText);
      alert(this.responseText);
    }
  }

  const handleLoginButton = (e) => {
    e.preventDefault();
    const url = `${authUrl}?client_id=${clientId}&response_type=code&redirect_uri=${encodeURI(
      redirectUrl
    )}&show_dialog=true&scope=${scopes}`;
    window.location.href = url;
  };

  return (
    <div className="App">
      <button className="loginButton" onClick={handleLoginButton}>Sign In</button>
      <Search accessToken={accessToken} />
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
