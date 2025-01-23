import React from 'react'
import { useEffect,useState } from 'react'
import ArtistCard from './card'
import './search.css'
import TrackCard from './TrackCard'
import AlbumCards from './albumsCards'
import Playlist from "./playlist"





// const [artistId, setArtistId] = ([])

function Search({ accessToken }) {

  useEffect(() => {
    if (accessToken) {
      console.log('Access Token:', accessToken);
      LoadUser()
      loadUserPlaylist()
      // Use the accessToken to make API calls or perform actions
    }
  }, [accessToken]);

  useEffect(() => {
      console.log('User Data '+ userId)
      // Use the accessToken to make API calls or perform actions
  
  }, [])


//usestates saved data

const[search, setSearch] = useState("");
const[artistName, setArtistName] = useState("");
const[artistId, setArtistId] = useState('');
const[artistImg, setArtistImg] = useState('');
const[artistPop, setArtistPop] = useState('');
const[artistGenre, setArtistGenre] = useState('');
const[topTrack, setTopTrack] = useState('');
const[album, setAlbum] = useState([]);
const[userDataName, setUserDataName] = useState('')
const[userDataEmail, setUserDataEmail] = useState('')
const[userDataPic, setUserDataPic] = useState('')
const[userId, setUserId] = useState('')


  const GETsearchParams = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/x-www-form-urlencoded'
    }};

async function SearchArtist() {

    const response = await fetch(`https://api.spotify.com/v1/search?`+`q=${search}&type=artist`, GETsearchParams)
    try{
      if(!response.ok){
        throw new Error ("Error Searching:Artist")
      } const data = await response.json();
  
      /// Artist Data
      setArtistName(data.artists.items[0].name)
      setArtistId(data.artists.items[0].id)
      setArtistImg(data.artists.items[0].images[0].url)
      setArtistPop(data.artists.items[0].followers.total.toLocaleString())
      setArtistGenre(data.artists.items[0].genres[0])
     // console.log(data.artists.items[0])
     SearchTopTracks(data.artists.items[0].id)
     SearchTopAlbums(data.artists.items[0].id)
       // console.log(`Artist Data: ID = ${artistId}, Name=${artistName}`)
       //await SearchTopTracks(artist.id, searchParams);

    } catch (error){console.log('Search Error:', error)}

  }

  async function LoadUser(){
    
  

      const response = await fetch(`https://api.spotify.com/v1/me`, GETsearchParams)
        try{
          if(!response.ok){
            throw new Error ("Error Searching: User Search")
          } const data = await response.json();
          //console.log(data)
          setUserId(data.id)
      
        
          } catch (error){ console.log(`User Load Error:`, error)}
          
      }

      async function loadUserPlaylist(userId){
    
  

        const response = await fetch(`https://api.spotify.com/v1/me/playlists/`, GETsearchParams)
          try{
            if(!response.ok){
              throw new Error ("Error Searching: User Search")
            } const data = await response.json()
            //console.log(data)
            console.log(data)
          
            } catch (error){ console.log(`User Load Playlist Error:`, error)}
            
        }




  async function SearchTopTracks(artistId) {
//https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg/top-tracks?market=US
    const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, GETsearchParams)
    try{
      if(!response.ok){
        throw new Error ("Error Searching:Top Tracks")
      } const data = await response.json();
     // console.log(data.tracks)
      setTopTrack(data.tracks[0].name)
      
      //data.tracks[0].name
    
      // error occurs here cannot save data? maybe api limitation save data to consts? 
      // when I edit past this section while in dev mode on chrome intent disconnects. 
      //reset cache and cookies, branch off to not affect working code.
      //i believe its from the search artist function maybe too many requests? 

    
      
      } catch (error){ console.log('Search Tracks Error:', error)}
      
  }

  async function SearchTopAlbums(artistId) {
    //api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/albums 
        const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?market=US`, GETsearchParams)
        try{
          if(!response.ok){
            throw new Error ("Error Searching:Top Albums")
          } const data = await response.json();
          setAlbum(data.items.map((item) => (
            //console.log(item.external_urls),
            {
              name: item.name,
              year: item.release_date,
               img: item.images[0].url,
               link: item.external_urls.spotify
          }
        )
          )
        )

          } catch (error){ console.log('Search Tracks Error:', error)}
          
      }
     








  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleButton = (e) => {
    e.preventDefault()
    setSearch(search)
    SearchArtist()

  }



    return(
    <>

    <div className="searchContainer">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White-300x82.png"></img>
        <form onSubmit={handleButton} id="search">
        <input id="search" type="text" placeholder="Enter a Artist" onChange={handleSearch}></input>
        <button onChange={handleButton}>Search</button>
        </form>
    </div>
    <div className="playlistConainer">
    <Playlist />
    </div>
    <div className="searchMainContainer">
      
      {artistName !== '' && ( 
        <>
      <ArtistCard name={artistName} img={artistImg} artistPop={artistPop}  artistGenre={artistGenre}/>
      <TrackCard topTrack={topTrack}/>
      {album.length > 0 && ( album.map((album, i) => 
      <AlbumCards key={i} link={album.link} albumName={album.name} albumYear={album.year} albumImg={album.img} /> 
      
      ))}
  
      </>
      )}
    </div>
    
    
    </>)

}
export default Search;