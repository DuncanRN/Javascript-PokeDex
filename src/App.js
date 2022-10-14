import './App.css';
import React from 'react';
import PokemonContainer from './containers/PokemonContainer';

function App() {
  return (
    <>
    <div className="App">
      <h1 className="title">Pokemon</h1>
      <PokemonContainer />
    </div>
    <footer className="footer">
      &copy; Duncan
    </footer>
    </>
  );
}

export default App;
