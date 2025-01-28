import React, { useState, useEffect } from "react";

function Playlist({ accessToken, userId }) {
  const [playlistData, setPlaylistData] = useState([]);
  const [isVisable, setIsVisable] = useState(true);
  const [specificPlaylistData, setSpecificPlaylistData] = useState([]);
  const [playlistId, setPlaylistId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (accessToken && userId) {
      loadUserPlaylist(userId);
    }
  }, [accessToken, userId]);

  const GETsearchParams = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  async function loadUserPlaylist(userId) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, GETsearchParams);
      if (!response.ok) {
        throw new Error('Error Getting User Playlists.');
      }
      const data = await response.json();
      const fetchedData = data.items.map((item) => ({
        name: item.name,
        id: item.id,
        numOfTracks: item.tracks.total,
        image: item.images[0]?.url,
      }));
      setPlaylistData(fetchedData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function loadSpecificPlaylist(playlistId) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, GETsearchParams);
      if (!response.ok) {
        throw new Error('Error Getting Specific Playlist.');
      }
      const data = await response.json();
      setSpecificPlaylistData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const handlePlaylistView = (e, playlistId) => {
    e.preventDefault();
    setIsVisable(false);
    setPlaylistId(playlistId);
    loadSpecificPlaylist(playlistId);
  };

  const handleReturn = (e) => {
    e.preventDefault();
    setIsVisable(true);
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {isVisable ? (
        <div className="container">
          <h2 className="playlist title">User Playlists</h2>
          <div className="playlistcard cards">
            <div className="playlistContainer">
              {playlistData.map((playlistItem) => (
                <button onClick={(e) => handlePlaylistView(e, playlistItem.id)} className={`cards playlistSelect ` + playlistItem.id}>
                  <div key={playlistItem.id} className="playlistItem">
                    <img src={playlistItem.image} alt={playlistItem.name} />
                    <h3>{playlistItem.name}</h3>
                    <p>{playlistItem.numOfTracks} Tracks</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="cards specPlaylist">
          
          <h1>{specificPlaylistData.name}</h1>
          <img src={specificPlaylistData.images?.[0]?.url} alt={specificPlaylistData.name} />
          <ul><h1>Songs</h1>
            {specificPlaylistData.tracks?.items.map((track) => (
              <button className="removeSong"><li key={track.track.id}>{track.track.name}</li></button>
              
            ))}
          </ul>
          <button className="returnButton" onClick={handleReturn}>Return</button>
        </div>
      )}
    </div>
  );
}

export default Playlist;