import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        add: {
            main: '#4CAF50',
            altermain: '#7cc57f',
        },
        delete: {
            main: '#d43a2c',
            altermain: '#e2786e',
        },
        edit: {
            main: '#b16c25',
            altermain: '#d48a40',
        },
        background: {
            default: '#f9f9f9',
            paper: '#ffffff',
            odd: '#bdbdbd',
            even: '#8a8a8a',
        },
        text: {
            primary: '#000',
            secondary: '#fff',
        },
        divider: '#ddd',
        error: {
            main: '#d43a2c',
        },
        action: {
            hover: '#ababab',
        },
    },
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
                    background: 'linear-gradient(#9198e5, #1b7e1c)',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.background.even,
                }),
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: ({ theme }) => ({
                    maxWidth: '800px',
                    margin: '40px auto',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: theme.palette.background.default,
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    width: '300px',
                }),
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0. 1)',
                    width: 'auto',
                    maxWidth: '400px',
                }),
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
                    style: ({ theme }) => ({
                        fontSize: '14px',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: theme.palette.delete.main,
                        color: theme.palette.text.secondary,
                        width: '50%',
                        '&:hover': {
                            backgroundColor: theme.palette.delete.altermain,
                        },
                    }),
                },
                {
                    props: { variant: 'edit' },
                    style: ({ theme }) => ({
                        fontSize: '14px',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: theme.palette.edit.main,
                        color: theme.palette.text.secondary,
                        width: '50%',
                        '&:hover': {
                            backgroundColor: theme.palette.edit.altermain,
                        },
                    }),
                },
                {
                    props: { variant: 'add' },
                    style: ({ theme }) => ({
                        height: '55px',
                        marginLeft: '20px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderRadius: '5px',
                        backgroundColor: theme.palette.add.main,
                        color: theme.palette.text.secondary,
                        '&:hover': {
                            backgroundColor: theme.palette.add.altermain,
                        },
                    }),
                },
                {
                    props: { variant: 'auth' },
                    style: ({ theme }) => ({
                        height: '55px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderRadius: '5px',
                        backgroundColor: theme.palette.add.main,
                        color: theme.palette.text.secondary,
                        '&:hover': {
                            backgroundColor: theme.palette.add.altermain,
                        },
                    }),
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
                    fontSize: '14px',
                    fontWeight: 'bold',
                    borderRadius: '10px 10px 0 0',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: ({ theme }) => ({
                    '&:nth-of-type(odd)': {
                        backgroundColor: theme.palette.background.odd,
                    },
                    '&:nth-of-type(even)': {
                        backgroundColor: theme.palette.background.even,
                    },
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                    },
                }),
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: '6px 8px',
                    border: `1px solid ${theme.palette.divider}`,
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
                }),
                head: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    padding: '8px 10px',
                },
            },
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        add: {
            main: '#0042a3',
            altermain: '#0a6dff',
        },
        delete: {
            main: '#881b28',
            altermain: '#bd283a',
        },
        edit: {
            main: '#74481b',
            altermain: '#a26120',
        },
        background: {
            default: '#131313',
            paper: '#1e1e1e',
            odd: '#5c5c5c',
            even: '#8a8a8a',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0bec5',
        },
        divider: '#444',
        error: {
            main: '#f48fb1',
        },
        action: {
            hover: '#555',
        },
    },
    components: lightTheme.components,
});

export { lightTheme, darkTheme };