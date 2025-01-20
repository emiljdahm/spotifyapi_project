import './card.css'
import Search from './search';
import React from 'react';

function ArtistCard(props){







    return (
        <div className="cards">
        <img className="cardImg" src={props.img}></img>
              <h3>{props.name}</h3>
              <p>Followers: {props.artistPop.toLocaleString()}</p>
              <p>Genre: {props.artistGenre.toUpperCase()}</p>
            </div>
    )

            




}

export default ArtistCard;