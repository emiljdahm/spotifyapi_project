import './card.css'
import React, {useState, useEffect} from 'react';



function TrackCard({accessToken, trackId,trackName}){
    const [trackAddId, setTrackAddId] = useState('')




    const GETsearchParams = {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + accessToken,
          'Content-Type': 'application/x-www-form-urlencoded'
        }};

        const PUTsearchParams = {
            method: 'PUT',
            headers: {
              'Authorization': 'Bearer ' + accessToken,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "ids": [trackId]
            })};

            async function AddTrackToUserLibrary() {
                try {
                  const response = await fetch('https://api.spotify.com/v1/me/tracks', PUTsearchParams); 
                  if (response.ok) {
                    console.log('Track added successfully');
                  } else {
                    console.error('Failed to add track:', response.status);
                  }
                } catch (error) {
                  console.error('Error adding track:', error);
                }
              }

              const handleAddButton = (e) => {
                e.preventDefault();
                setTrackAddId(trackId); // Update the state with the current trackId
                //console.log('Add button pressed for track ID:', trackId);
                alert(`${trackName} added to library!`)
                // Call the function to add the track to the user's library
                AddTrackToUserLibrary();
              };



    return (
      
      
        <div className="cards topTrack ">
            <h1>Top Track</h1>
            <p className="trackName">{trackName}</p>
             <button onClick={handleAddButton} className="addTrack">+</button>
             <button className="removeTrack">-</button>
          
               
            
            
            </div>
)

            




}

export default TrackCard;