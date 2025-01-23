import React from 'react'

  const clientId = "457c90c1dcd144308ec4a560e31d731d"
  const clientSecret = "87423b39aac249beba4de5e4b3f48670"

export async function getAuth(code){
    
//passive token
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: redirect_uri
        })
      });
    
      if (!response.ok) {
        throw new Error('Failed to fetch auth token');
      }
    
      return await response.json();
};

export default getAuth;