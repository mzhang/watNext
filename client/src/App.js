import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home';
import Cards from './pages/Cards'
import ComponentLibrary from './pages/ComponentLibrary'

function App() { 

  return (
    <>
      <Router>
        <Home path="/" />
        <Cards path="/cards" />
        <ComponentLibrary path="/componentLibrary" />
      </Router>
    </>
  )
  
}
export default App;
