import React, { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import getAuth from "./utilities"
import Search from "./search"


function App(props) {
//search states
  const [accessToken, setAccessToken] = useState("")

// componet mounts and refers to utilities function to get auth
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


  return (
    <div className="App">
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
