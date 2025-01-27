import React from 'react'
import { useEffect,useState } from 'react'
import Card from './card'
import {getAuth} from './utilities'
import './search.css'


function Search(props){

// const [artistId, setArtistId] = ([])
const[token, setAccessToken] = useState("")
const[search, setSearch] = useState("")
const[artistName, setArtistName] = useState("")
const[artistId, setArtistId] = useState("")
const[artistImg, setArtistImg] = useState('')
const[artistPop, setArtistPop] = useState('')
const[artistGenre,setArtistGenre] =useState('')
const[isVisiable, setIsVisiable] = useState(false)




//get auth returns token code 
  useEffect(() => {
    const fetchToken = async () => {
      try{
      const token = await getAuth()
      setAccessToken(token)
      } catch(error) {
        console.log('Fetch Error:', error)
      }
    };
    fetchToken()
  },[])
//check if data is saved into state rerender
 /* useEffect(() =>{
    console.log('Data change at artistId; '+artistId)
  }), [artistId] */

  //use token code to search for artist
  async function SearchArtist() {

    const searchParams = {
      method: 'GET',
      headers: {
          'Authorization' : 'Bearer ' + token,
          'Content-Type' : 'application/x-www-form-urlencoded'
      } /* ,
      body: 
      'grant_type=client_credentials&client_id='+clientId+"&client_secret="+clientSecret */
  }

  //search for artist ID or save artist info to array/object to be used

    const response = await fetch(`https://api.spotify.com/v1/search?`+`q=${search}&type=artist`, searchParams)
    try{
      if(!response.ok){
        throw new Error ("Error Searching:")
      } const data = await response.json();
      // error occurs here cannot save data? maybe api limitation  save data to consts?
      setArtistName(data.artists.items[0].name)
      setArtistId(data.artists.items[0].id)
      setArtistImg(data.artists.items[0].images[0].url)
      setArtistPop(data.artists.items[0].followers.total.toLocaleString())
      setArtistGenre(data.artists.items[0].genres[0])
      // console.log(data.artists.items[0])
     SearchTopTracks(data.artists.items[0].id)
     SearchTopAlbums(data.artists.items[0].id)
       // console.log(`Artist Data: ID = ${artistId}, Name=${artistName}`)
      } catch (error){ console.log('Search Error:', error)}
      
  }

  async function SearchTopAlbums(artistId) {
    //api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/albums 
        const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?market=US`, GETsearchParams)
        try{
          if(!response.ok){
            throw new Error ("Error Searching:Top Albums")
          } const data = await response.json();
          setAlbum(data.items.map((item) => (
            console.log(item.external_urls),
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



    return(<>

    <div className="searchContainer">
        <h1></h1>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White-300x82.png"></img>
        <form onSubmit={handleButton} id="search">
        <input id="search" type="text" placeholder="Enter a Artist" onChange={handleSearch}></input>
        <button onChange={handleButton}>Search</button>
        </form>
    </div>
    <div>
      {artistName !== '' && ( 
      <>
      <Card name={artistName} img={artistImg} artistPop={artistPop}  artistGenre={artistGenre}/>
      {album.length > 0 && ( album.map((album, i) => 
      <AlbumCards key={i} link={album.link} albumName={album.name} albumYear={album.year} albumImg={album.img} /> 
      
      ))}
      </>
      )}
    </div>
    
    </>)

}
export default Search;