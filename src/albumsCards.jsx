import './card.css'
import React from 'react';

function AlbumCards(props){






    return (
        <div className="cards">
              <h3>{props.albumName}</h3>
            
                <p>{props.albumYear}</p>
            </div>
)

            




}

export default AlbumCards;