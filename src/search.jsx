import React from 'react'
import { useEffect,useState } from 'react'
import {getAuth} from './utilities'

function Search(props){

const[accessToken, setAccessToken] = useState("")
const[search, setSearch] = useState("")

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

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleButton = (e) => {
    e.preventDefault()
    setSearch(search)
    console.log(`Searching for ${search}`)
    setSearch("")
  }



    return(<>

    <div className="searchContainer">
        <h1>Search for Music</h1>
        <input type="text" placeholder="Search for music" onChange={handleSearch}></input>
        <button onChange={handleButton}>Search</button>
    </div>
    
    </>)

}

export default Search;