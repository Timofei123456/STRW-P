import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
          borderSpacing: '0 10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#333',
          color: '#fff',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '10px 10px 0 0',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: '#f9f9f9',
          },
          '&:nth-of-type(even)': {
            backgroundColor: '#fff',
          },
          '&:hover': {
            backgroundColor: '#f2f2f2',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '10px',
          border: '1px solid #ddd',
          fontSize: '14px',
          '&:first-child': {
            borderRadius: '10px 0 0 10px',
          },
          '&:last-child': {
            borderRadius: '0 10px 10px 0',
          },
        },
        head: {
          fontSize: '16px',
          fontWeight: 'bold',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          padding: '5px 10px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: '#d43a2c',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#5e342f',
          },
        },
      },
    },
  },
});
    
export default theme;