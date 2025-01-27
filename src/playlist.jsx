

import React, {useState, useEffect} from "react";




function Playlist({accessToken,userId}){

  const[playlistData, setPlaylistData] = useState([])

  

  useEffect(() => {
    if (accessToken && userId) {
      
      loadUserPlaylist(userId)
      // Use the accessToken to make API calls or perform actions
    }
  }, [accessToken, userId]);



  const GETsearchParams = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/x-www-form-urlencoded'
    }};

async function loadUserPlaylist(userId){

 const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, GETsearchParams)
 try{
 if(!response.ok){
  throw new Error('Error Getting User Playlists.')
 } const data = await response.json();
// console.log(data)
 const fetchedData = data.items.map((item) => (
    {
      name: item.name,
      id: item.id,
      numOfTracks: item.tracks.total,
      image: item.images[0]?.url
    }
  )
)
 setPlaylistData(fetchedData)
 }catch(error) {console.log('Playlist User Load Error', error)}
}

async function loadSpecificPlaylist(userId){

  const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, GETsearchParams)
  try{
  if(!response.ok){
   throw new Error('Error Getting User Playlists.')
  } const data = await response.json();
 // console.log(data)

 
  
} catch(error) {console.log('Playlist Specific Load Error', error)}
}

const handlePlaylistView = (e) => {
  e.preventDefault()
  console.log("test")

}

const handleReturn = () => {

}


return (
  <div>
  <div className="container">
     <h2 className="playlist title" >User Playlists</h2>
    <div className="playlistcard cards">
      <div className="playlistContainer">
        {playlistData.map((playlistItem) => (
          <button onClick={handlePlaylistView} className={`cards ` + playlistItem.id}><div key={playlistItem.id} className="playlistItem">
            <img src={playlistItem.image} alt={playlistItem.name} />
            <h3>{playlistItem.name}</h3>
            <p>{playlistItem.numOfTracks} Tracks</p>
          </div></button>
        ))}
      </div>
    </div>
  </div>
  </div>
)
}

  //add search function or move function to headers
        //enter or button to submit playlist to profile?
        //login to gain access to playlists?

export default Playlist;
