import React, { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import Card from "./card"

 const pastel = ["#80ef80","#ff46a2","#ff991c","#40e0d0"] 
  const clientId = "457c90c1dcd144308ec4a560e31d731d"
  const clientSecret = "87423b39aac249beba4de5e4b3f48670"


function App() {
//search states
  const  [search, setSearch] = useState("")
  const [accessToken, setAccessToken] = useState("")
  const [tracks, setTracks] = useState([])
  const [artistName, setArtistName] = useState("");
  const [artistId, setArtistId] = useState("");
  const [images, setImages] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  //login states
  const [isLoginVisible, setloginIsVisible] = useState(false);
  const [userProfile, setUserProfile] = useState("")
  const [loginForm, setLoginForm] = useState("")


  useEffect(() => {
      
//api access and params JWT accss... complicated
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
}, [])


async function UserProfile(){


  //if logged in dont show form login
  if(search === ""){
    setloginIsVisible(true);
    return;
  }
  isLoginVisible(true);

  const getParams = {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + accessToken
    },
  }

  const profileData = 
  await fetch('https://api.spotify.com/v1/me', getParams)
  .then((response) => response.json())
  .then(data=> console.log(data))
  


}
//search 2 get request, name or id of artist then grab their work 
async function UserSearch(){

  if(search === ""){
    setIsVisible(false);
    return;
  }
  setIsVisible(true);
 


  console.log(`Searching for ${search}`)

  const searchParam = {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + accessToken
    },
  };
//get artist data name and ID
  const artistData = 
  await fetch('https://api.spotify.com/v1/search/?q='
  + search +"&type=artist", searchParam)
  .then((response) => response.json())
  

  const artistId = artistData.artists.items[0]?.id;
  const artistName = artistData.artists.items[0]?.name;
  setArtistName(artistName);
  setArtistId(artistId)


  //get track info

  const trackData = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks`, searchParam)
  .then((response) => response.json())

  const topTracks = trackData.tracks.map((track) => track.name);
  setTracks(topTracks);

      //confirm working
   console.log(topTracks[0])

   //image info

   const imageData = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, searchParam)
   .then((response) => response.json())
 
   const imageUrls = imageData.images.map((image) => image.url);
   setImages(imageUrls);
 
       //confirm working
       console.log(imageUrls[0])
    
    
  
}

//handles change to search
const handleFormChange = (e) => {
  setSearch(e.target.value)
}

const handleloginChange = (e) => {
  setSearch(e.target.value)
}

//sets userSearch param and testing input
const handleButton = (e) => {
  e.preventDefault()
  console.log('clicked button')
  UserSearch()
  setSearch('')
}


  return (
    <div>
          <h1 className="headerText">Spoty Search
        </h1>
    <main>
      <form className="form" onChange={handleFormChange}>
        <label id="search" htmlFor="Search"></label>
        <input type="text" id="Search" value={search} />
        <button id="search" onClick={handleButton} >Search</button>
      </form>
    </main>
    </div>

  )
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
