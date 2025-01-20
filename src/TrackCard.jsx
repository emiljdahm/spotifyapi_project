import './card.css'
import Search from './search';
import React from 'react';

function TrackCard(props){


    async function SearchTopTracks(artistId, searchParams) {
        const response = await fetch(`https://api.spotify.com/v1/artists/`+`${artistId}/top-tracks?market=US`, searchParams)
        try{
          if(!response.ok){
            throw new Error ("Error Searching:Top Tracks")
          } const data = await response.json();
          const tracks = data.tracks[0];
          console.log(data)
          // error occurs here cannot save data? maybe api limitation save data to consts? 
          // when I edit past this section while in dev mode on chrome intent disconnects. 
          //reset cache and cookies, branch off to not affect working code.
          //i believe its from the search artist function maybe too many requests? 
    
        
          
          } catch (error){ console.log('Search Tracks Error:', error)}
          
      }




    return (
        <div className="cards">
              <h3>Top Tracks:</h3>
              <ul>
                <li>
                {props.tracks}
                  </li>
              </ul>
            </div>
         )

            




}

export default TrackCard;