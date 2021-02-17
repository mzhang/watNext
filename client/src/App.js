import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home';
import Cards from './pages/Cards'
import ComponentLibrary from './pages/ComponentLibrary'

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
