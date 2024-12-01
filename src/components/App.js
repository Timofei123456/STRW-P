import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import Router from './Router';
import { lightTheme, darkTheme } from '../theme/theme';
import { fetchClients } from '../redux/slicers/clientSlice';

function App() {
  const dispatch = useDispatch();
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  
  const isAuthenticated = useSelector(state => state.authState.isAuthenticated);
  const token = useSelector(state => state.authState.token);
  
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    if (isAuthenticated && token) {
      dispatch(fetchClients(token));
    }
  }, [dispatch, isAuthenticated, token]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <div className="App">
          <Router isAuthenticated={isAuthenticated} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;