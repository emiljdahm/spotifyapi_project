import './card.css'
import React from 'react';

function AlbumCards(props){






    return (
        <div className="cards">
              <a href={props.link} target="_blank" rel="noopener noreferrer"><h3>{props.albumName}</h3></a>
          <img className="albumCover" src={props.albumImg} alt={props.albumName} />
                <p>{props.albumYear}</p>
            </div>
)

            




}

export default AlbumCards;