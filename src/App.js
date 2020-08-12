import React, { useEffect, useState } from 'react';
import Player from './components/Player'
import Login from './components/Login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi;

function App() {
  const [{ user, token }, dispatch ] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          action: "SET_USER",
          user
        })
      })

    }

  }, [])

  return (
    <div className="App">
      {token ? (
      <Player spotify={spotify} />
      ) : (
      <Login />
      )} 
    </div>
  );
}

export default App;
