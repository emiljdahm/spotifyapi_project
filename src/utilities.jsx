import React , {useState} from 'react'
import App from "./App"





function UserSearchFunc(userSearch){

fetch(`https://api.spotify.com/v1/${userSearch}`)
    .then(response => {
        if(!response.ok){
            throw new Error("Could not retrieve data.")
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));


}

export default UserSearchFunc