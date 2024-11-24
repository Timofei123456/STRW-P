import ClientAPI from "../api/services";
import NavBar from './NavBar';
import Router from './Router';
import { BrowserRouter } from "react-router-dom";
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../theme/theme';
import { useState } from "react";

const initialClients = ClientAPI.all();

function App() {
  const [clients, setClients] = useState(initialClients);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isAuthenticated = useSelector(state => state.authState.isAuthenticated);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <div className="App">
          <Router 
            isAuthenticated={isAuthenticated} 
            clients={clients} 
            setClients={setClients} 
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;