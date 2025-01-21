import './card.css'
import Search from './search';
import React from 'react';

function ArtistCard(props){







    return (
        <div className="cards">
        <div>
              <h3>{props.name}</h3>
              <img className="maincardImg" src={props.img}></img>
              <p>Followers: {props.artistPop}</p>
              <p>Genre: {props.artistGenre}</p>
              </div>
            </div>
    )

            




}

export default ArtistCard;