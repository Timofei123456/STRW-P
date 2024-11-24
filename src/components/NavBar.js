import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { MaterialUISwitch } from '../theme/theme';

const NavBar = ({ toggleTheme, isDarkMode }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
          <MaterialUISwitch checked={isDarkMode} onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;