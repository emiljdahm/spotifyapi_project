

import React, {useState, useEffect} from "react";
import {getAuth} from "./utilities"




function Playlist({accessToken,trackName,trackId}){

  useEffect(() => {
    if (accessToken) {
      console.log('Access Token:', accessToken);
      // Use the accessToken to make API calls or perform actions
    }
  }, [accessToken]);





const handlePlaylistAdd = () =>{

}


    return (<div className="playlistcard cards">
      <button>X</button>
      <h2>Add to Playlist?</h2>
      <form>
        <label htmlFor="playlistName">Name</label>
        <input type="text" id="playlistName"></input><br/>
        <button className="playlistSave">+</button>
      </form>
      <ul>
        <li>Tracks or Albums Que</li>
      </ul>

    </div>)
}
  //add search function or move function to headers
        //enter or button to submit playlist to profile?
        //login to gain access to playlists?
export default Playlist;