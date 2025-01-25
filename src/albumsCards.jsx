import './card.css'
import React, {useState} from 'react';

function AlbumCards({albumImg,albumName,albumYear,link,albumId,accessToken}){

    const [albumAddId, setAlbumAddId] = useState('')




    const GETsearchParams = {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + accessToken,
          'Content-Type': 'application/x-www-form-urlencoded'
        }};

        const PUTsearchParams = {
            method: 'PUT',
            headers: {
              'Authorization': 'Bearer ' + accessToken,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "ids": [albumId]
            })};

            async function AddAlbumToUserLibrary() {
                try {
                  const response = await fetch('https://api.spotify.com/v1/me/albums', PUTsearchParams); 
                  if (response.ok) {
                    console.log('Album added successfully');
                  } else {
                    console.error('Failed to add album:', response.status);
                  }
                } catch (error) {
                  console.error('Error adding album:', error);
                }
              }

              const handleAddButton = (e) => {
                e.preventDefault();
                setAlbumAddId(albumId); // Update the state with the current trackId
                console.log('Add button pressed for track ID:', albumId);
                alert(`${albumName} added to library!`)
                // Call the function to add the track to the user's library
                AddAlbumToUserLibrary();
              };


    return (
      <div className="container albums">
        <div className="cards">
              <a href={link} target="_blank" rel="noopener noreferrer"><h3>{albumName}</h3></a>
          <img className="albumCover" src={albumImg} alt={albumName} />
                <p>{albumYear}</p>
                <button onClick={handleAddButton}className="addAlbum">+</button>
            </div>
            </div>
)

            




}

export default AlbumCards;