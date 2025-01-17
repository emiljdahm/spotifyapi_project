

import React, {useState, useEffect} from "react";
  const clientId = "457c90c1dcd144308ec4a560e31d731d"
  const clientSecret = "87423b39aac249beba4de5e4b3f48670"

function Playlist(){

     const [accessToken, setAccessToken] = useState("")


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
        const playlistData = 
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
  //add search function or move function to headers
        //enter or button to submit playlist to profile?
        //login to gain access to playlists?
export default Playlist;