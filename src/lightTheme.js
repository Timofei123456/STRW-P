import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    margin: 0,
                    padding: 0,
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'linear-gradient(#e66465, #9198e5)',
                },
            },
        },
        MuiBox: {
            styleOverrides: {
                root: {
                    maxWidth: '800px',
                    margin: '40px auto',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    width: 'auto',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    width: 'auto',
                    maxWidth: '400px'
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h6: {
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                },
            },
        },
        MuiTextField: {
            variants: [
                {
                    props: { variant: 'auth' },
                    style: {
                        margin: '10px 0',
                        width: 'auto',
                    },
                },
                {
                    props: { variant: 'form' },
                    style: {
                        marginLeft: '20px',
                        height: '40px',
                    },
                },
            ],
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'delete' },
                    style: {
                        fontSize: '14px',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: '#d43a2c',
                        color: '#fff',
                        width: '100%',
                        '&:hover': {
                            backgroundColor: '#5e342f',
                        },
                    },
                },
                {
                    props: { variant: 'add' },
                    style: {
                        height: '55px',
                        marginLeft: '20px',
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
                {
                    props: { variant: 'auth' },
                    style: {
                        height: '55px',
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
            ],
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    borderCollapse: 'separate',
                    borderSpacing: '0 5px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                    width: 'auto',
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: '#333',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    borderRadius: '10px 10px 0 0',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&:nth-of-type(odd)': {
                        backgroundColor: '#e8e8e8',
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
                    padding: '6px 8px',
                    border: '1px solid #ddd',
                    fontSize: '14px',
                    '&:first-child': {
                        borderRadius: '10px 0 0 10px',
                    },
                    '&:last-child': {
                        borderRadius: '0 10px 10px 0',
                    },
                    width: '120px',
                    maxWidth: '120px',
                    whiteSpace: 'nowrap',
                },
                head: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    padding: '8px 10px',
                },
            },
        },
    },
});

export default lightTheme;