import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home';
import Cards from './pages/Cards'
import CardsNoLogin from './pages/CardsNoLogin'
import ComponentLibrary from './pages/ComponentLibrary'

function App() { 

  return (
    <div>
      <Router>
        <Home path="/" />
        <Cards path="/cards" />
        <ComponentLibrary path="/componentLibrary" />
        <CardsNoLogin path="/CardsNoLogin" />
      </Router>
    </div>
  )
  
}
export default App;
