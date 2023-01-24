import React from 'react';
import { Route, Routes } from 'react-router';
import {BrowserRouter as Router } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/pokemons/:items' element={<Items/>}/>
      <Route path='/pokemons' element={<Pokemons/>}/>
      <Route path='/pokemons/:name' element={<Pokemons/>}/>  
      <Route path='/' element={<Pokemons/>}/>
      </Routes>
      <header className="App-header">
        <h1>
          Hola
        </h1>
      </header>
    </div>
    </Router>
  );
}

export default App;
