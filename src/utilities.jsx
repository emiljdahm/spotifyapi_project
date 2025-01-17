import React from 'react'

  const clientId = "457c90c1dcd144308ec4a560e31d731d"
  const clientSecret = "87423b39aac249beba4de5e4b3f48670"

export async function getAuth(){
    

     const authParams = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body: 
        'grant_type=client_credentials&client_id='+clientId+"&client_secret="+clientSecret
    }
    try{
        const response = await fetch(`https://accounts.spotify.com/api/token`, authParams)
        if(!response.ok){
            throw new Error('Network response was not ok')
        }
        const data = await response.json();
            console.log(data.access_token)
            return data.access_token
        }
    catch(error) {
        console.log('Token Error' ,error)
        throw error
    }
};

export default getAuth;