

import React, {useState, useEffect} from "react";




function Playlist({accessToken,trackName,trackId, userId}){

  const[playlistData, setPlaylistData] = useState([])

  useEffect(() => {
    if (accessToken) {
      console.log('Access Token:', accessToken);
      loadUserPlaylist()
      // Use the accessToken to make API calls or perform actions
    }
  }, [accessToken]);

  const GETsearchParams = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/x-www-form-urlencoded'
    }};

async function loadUserPlaylist(userId){

 const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists?offset=0&limit=50&locale=en-US`, GETsearchParams)
 try{
 if(!response.ok){
  throw new Error('Error Getting User Playlists.')
 } const data = await response.json();
 console.log(data)

} catch(error) { console.log('Playlist Load Error', error)}
}


const handlePlaylistAdd = () =>{

}



    return (
    <div className="container">
    <div className="playlistcard cards">
      <h2>User Playlists</h2>


    </div>
    </div>)
}
  //add search function or move function to headers
        //enter or button to submit playlist to profile?
        //login to gain access to playlists?
export default Playlist;