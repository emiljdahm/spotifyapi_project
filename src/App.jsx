import React, { useEffect, useState } from 'react'
import UserSearchFunc from './utilities';
import './App.css'


function App() {

  const  [search, setSearch] = useState("")
  const [result, setResult] = useState("")

  const handleSearch = (e) => {
    setSearch(e.target.value)
  
  };

  const handleButtonClick = (e) => {
    e.preventDefault()
    setSearch("")

  }

  useEffect(()=> {
    const fetchData = async () => {
      const result = await fetch(`https://api.spotify.com/v1/${search}`)
      const jsonResult = await result.json();
      setSearch(result)
    }
  },[search])
 



  return (
    <main>
      <h1 className="headerText">Search for 
        </h1>
      <form className="form">
        <input type="text" id="Search" value={search} onChange={handleSearch} />
        <button id="search" onClick={handleButtonClick} >Search</button>
      </form>
    </main>
  )

}

export default App


// 1 create api token X
//set up git hub X
//setup api
//pull info form api
//parse info 
//set up componets (outline the design)
//app functionality needs
// search music
//create and listen to playlist
//rename playlist
//saveplaylist to account
//
