import './card.css'
import Search from './search';
import React from 'react';

function Card(props){







    return (
        <div className="cards">
        <img src={props.img}></img>
              <h3>{props.name}</h3>
              <p>Followers: {props.artistPop}</p>
            </div>
    )

            




}

export default Card;