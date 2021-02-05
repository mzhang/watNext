import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Home from './pages/home';
import Cards from './pages/cards'
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
      </Router>
    </div>
  )
  
}
export default App;
