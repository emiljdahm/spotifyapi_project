import React, { useState } from 'react'
import UserSearchFunc from './utilities';


function App() {

  const  [search, setSearch] = useState("Search for Artist!")
  const  [data, setData] = useState("")

  const handleSearch = (e) => {
    setSearch(e.target.value)
  
  };

  return (
    <main style={{display:"flex",
      justifyContent: "center",
}}>
      <form style={{margin: "320px",
                    padding: "50px",
                    backgroundColor:"gray",
                    }}>
        <input type="text" id="Search" value={search} onChange={handleSearch} />
        <button id="search" value={data} >Search</button>
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
