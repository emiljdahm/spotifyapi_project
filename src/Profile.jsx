import './card.css'
import React from 'react';

function Profile(props){






    return (
        <div className="container">
        <div className="ProfileCard cards">
            <h2>Welcome!</h2>
            <img src={props.userImage}></img>
            <h4>{props.userName}!</h4>
            </div>
            </div>
)

            




}

export default Profile;