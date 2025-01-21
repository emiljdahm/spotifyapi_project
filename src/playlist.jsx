

import React, {useState, useEffect} from "react";
import {getAuth} from "./utilities"

function Playlist(){

    



    async function LoadPlaylist(){
//if not input remove from screen update state
      /*  if(search === ""){
          setIsVisible(false);
          return;
        }
        setIsVisible(true);
        */
       
      
      
        console.log(`Searching for ${search}`)
      
        const loadParam = {
          method: 'Post',
          headers: {
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + accessToken
          },
        };
      //get playlist info -> look up profile
        async function PlaylistData(){ 
        await fetch(`https://api.spotify.com/users/${user_id}/playlists`,loadParam)
        .then((response) => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))        
      

          
          
        
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
}
  //add search function or move function to headers
        //enter or button to submit playlist to profile?
        //login to gain access to playlists?
export default Playlist;