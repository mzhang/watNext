import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home';
import Cards from './pages/Cards'
import ComponentLibrary from './pages/ComponentLibrary'
import Navbar from './components/Navbar'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: "Arial"
  },
  palette: {
    primary: {
      main: "#8EB19D",
    },
    secondary: {
      main: "#8CC7A1"
    }
  }
});

function App() { 

  return (
    <MuiThemeProvider theme={theme}>
      <Navbar />
      <Router>
        <Home path="/" />
        <Cards path="/Cards" />
        <ComponentLibrary path="/ComponentLibrary" />
      </Router>
    </MuiThemeProvider>
  )
  
}
export default App;
