

import React, {useState, useEffect} from "react";
import {getAuth} from "./utilities"



function Playlist({accessToken, artistId}){

  useEffect(() => {
    if (accessToken) {
      console.log('Access Token:', accessToken);
      // Use the accessToken to make API calls or perform actions
    }
  }, [accessToken]);

  const GETsearchParams = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/x-www-form-urlencoded'
    }};


    



    async function LoadPlaylist(artistId,accessToken){
    
        //https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg/top-tracks?market=US

            const response = await fetch(`https://api.spotify.com/v1/playlists/`, GETsearchParams)
            try{
              if(!response.ok){
                throw new Error ("Error Searching: Playlist")
              } const data = await response.json();
              console.log(data)
            
              
              //data.tracks[0].name
            
              // error occurs here cannot save data? maybe api limitation save data to consts? 
              // when I edit past this section while in dev mode on chrome intent disconnects. 
              //reset cache and cookies, branch off to not affect working code.
              //i believe its from the search artist function maybe too many requests? 
        
            
              
              } catch (error){ console.log('Search Tracks Error:', error)}
              
          }





    return (<div className="playlistContainer">
        <div className="avaliableSongsContainer">
            <h1>Avaliable Songs</h1>
        </div>
        <div className="inPlaylistContainer">
            <h1>In Playlist</h1>
        </div>
      
        
    </div>
    )
}
  //add search function or move function to headers
        //enter or button to submit playlist to profile?
        //login to gain access to playlists?
export default Playlist;