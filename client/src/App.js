import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/home';
import Cards from './pages/cards'
import ComponentLibrary from './pages/componentLibrary'
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
        <Cards path="/cards" />
        <ComponentLibrary path="/componentLibrary" />
      </Router>
    </MuiThemeProvider>
  )

}
export default App;
