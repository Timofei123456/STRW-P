import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiBox: {
          styleOverrides: {
            root: {
              maxWidth: '400px',
              margin: '40px auto',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#f9f9f9',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              margin: '10px',
              width: '100%',
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              margin: '20px',
              padding: '10px 20px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '5px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#6ecc72',
              },
            },
          },
        },
      },
});

export default theme;