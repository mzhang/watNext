import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Register from './pages/register';
import Home from './pages/home';

function App() { 

  return (
    <div>
      <Router>
        <Home path="/" />
        <Register path="/register" />
      </Router>
    </div>
  )
  
}
export default App;
