import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/home';
import Cards from './pages/cards'
import CardsNoLogin from './pages/cardsNoLogin'
import ComponentLibrary from './pages/componentLibrary'

import axios from 'axios';
axios.defaults.withCredentials = true

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
