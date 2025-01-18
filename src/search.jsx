import React from 'react'
import { useEffect,useState } from 'react'
import {getAuth} from './utilities'
import './search.css'


function Search(){

const [savedData, setSavedData] = ([])
const[token, setAccessToken] = useState("")
const[search, setSearch] = useState("")


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
  useEffect(() =>{
    console.log(savedData)
  }), [savedData]

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

    const response = await fetch(`https://api.spotify.com/v1/search?`+`q=${search}&type=artist`,searchParams)
    try{
      if(!response.ok){
        throw new Error ("Error Searching:")
      } const data = await response.json();
      // error occurs here cannot save data? maybe api limitation
        console.log(data)
      
  
      } catch (error){ console.log('Search Error:', error)}
      
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
        <h1>Search for Music</h1>
        <form onSubmit={handleButton} id="search">
        <input type="text" placeholder="Search for music" onChange={handleSearch}></input>
        <button onChange={handleButton}>Search</button>
        </form>
    </div>
    
    </>)

}
export default Search;