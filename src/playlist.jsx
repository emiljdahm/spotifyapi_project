

import React, {useState, useEffect} from "react";
import {getAuth} from "./utilities"



function Playlist(props, {accessToken}){

  useEffect(() => {
    if (accessToken) {
      console.log('Access Token:', accessToken);
      // Use the accessToken to make API calls or perform actions
    }
  }, [accessToken]);








    return (<div className="playlistcard cards">
      <h2>Playlist</h2>
      <ul>
        <li></li>
      </ul>

    </div>)
}
  //add search function or move function to headers
        //enter or button to submit playlist to profile?
        //login to gain access to playlists?
export default Playlist;