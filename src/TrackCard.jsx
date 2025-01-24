import './card.css'
import React from 'react';

function TrackCard(props){






    return (
        <div className="cards topTrack">
             <p className="addTrack">+</p>
             <p>-</p>
              <h3>Top Track</h3>
                <p>{props.trackName}</p>
            
            </div>
)

            




}

export default TrackCard;