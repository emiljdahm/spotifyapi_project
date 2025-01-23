

import React, {useState, useEffect} from "react";
import {getAuth} from "./utilities"



function Playlist({accessToken, artistId}){

  useEffect(() => {
    if (accessToken) {
      console.log('Access Token:', accessToken);
      // Use the accessToken to make API calls or perform actions
    }
  }, [accessToken]);








    return (<div className="listofUserPlaylist">
        <div className="avaliableSongsContainer">
            <h1>Playlists</h1>
            <ul>
              <li></li>
            </ul>
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