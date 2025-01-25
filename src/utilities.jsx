import React from 'react'

  const clientId = ""
  const clientSecret = ""

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