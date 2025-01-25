import './card.css'
import React from 'react';

function ArtistCard(props){







    return (
        <div className="container">
        <div className="cards">
        <h2>Artist</h2>
              <h3>{props.name}</h3>
              <img className="maincardImg" src={props.img}></img>
              <p>Followers: {props.artistPop}</p>
              <p>Genre: {props.artistGenre}</p>
              <p></p>
            </div>
            </div>
    )

            




}

export default ArtistCard;