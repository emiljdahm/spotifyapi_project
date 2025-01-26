import './card.css'
import React from 'react';

function ArtistCard(props){







    return (

        <div className="cards artistCard">
             <img className="maincardImg" src={props.img}></img>
        <h1>Artist</h1>
        <h2>{props.name}</h2>
            </div>
   
    )

            




}

export default ArtistCard;