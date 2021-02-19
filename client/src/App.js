import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home';
import Cards from './pages/Cards'
import ComponentLibrary from './pages/ComponentLibrary'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  typography: {
    fontFamily: "Arial"
  },
  palette: {
    primary: {
      main: "#8EB19D",
    }
  }
});

function App() { 

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Home path="/" />
        <Cards path="/cards" />
        <ComponentLibrary path="/componentLibrary" />
      </Router>
    </MuiThemeProvider>
  )
  
}
export default App;
