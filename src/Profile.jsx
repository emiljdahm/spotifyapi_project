import './card.css'
import React from 'react';

function Profile(props){






    return (
        <div className="container">
        <div className="ProfileCard cards">
        <img src={props.userImage}></img>
            <h2>Welcome!</h2>
            <h3>{props.userName}</h3>
            </div>
            </div>
)

            




}

export default Profile;