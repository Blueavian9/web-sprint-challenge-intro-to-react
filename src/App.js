import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Character from './components/Character';

const App = () => {
  const [characters, setCharacter] = useState();
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(resp => {
        setCharacter(resp.data);
      })
      .catch(error => {
        console.log('error', error);
      })
  }, []);
  //🚧-----TESTING-----🚧
  if(!characters)
  console.log('undefined');
  else
  console.log('value');
  
  if(!characters) {
    return ( 
      <div>
        <h1>LOADING...</h1>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1 className="Header">Characters</h1>
        <Character characters={characters}/>
      </div>
    );
  }

}

export default App;