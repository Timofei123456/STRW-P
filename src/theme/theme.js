import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

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
            main: '#e99516',
            altermain: '#e6ad56',
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
            styleOverrides: (theme) => ({
                body: {
                    margin: 0,
                    padding: 0,
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: theme.palette.background.default,
                },
            }),
        },
        MuiAppBar: {
            styleOverrides: {
                root: ({ theme }) => ({
                    background: theme.palette.add.main,
                    color: theme.palette.background.paper,
                    boxShadow: 'none',
                    margin: '0',
                }),
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: '64px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
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
        MuiCard: {
            styleOverrides: {
                root: {
                    minWidth: '20vw',
                    borderRadius: '10px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    margin: '10px',
                    transition: 'transform 0.2s',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    },
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: ({ theme }) => ({
                    borderRadius: '10px',
                    border: `1px solid ${theme.palette.background.even}`,
                    marginLeft: '20px',
                    marginTop: '84px',
                    marginBottom: '5em',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'start',
                    backgroundColor: theme.palette.background.default,
                    width: '300px',
                }),
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: ({ theme }) => ({
                    margin: '10px',
                    borderRadius: '10px',
                    border: `1px solid ${theme.palette.background.even}`,
                }),
            },
            variants: [
                {
                    props: { variant: 'main' },
                    style: ({ theme }) => ({
                        backgroundColor: theme.palette.background.paper,
                        padding: '20px',
                        width: '100%',
                        minHeight: 'calc(100vh - 40px)',
                        boxSizing: 'border-box',
                        maxWidth: '100%',
                    }),
                },
                {
                    props: { variant: 'auth' },
                    style: ({ theme }) => ({
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        width: 'auto',
                        maxWidth: '400px',
                    }),
                },
            ],
        },
        MuiTypography: {
            styleOverrides: {
                h6: {
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                },
                h5: {
                    fontSize: '14px',
                    fontWeight: 'normal',
                    marginBottom: '8px',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    margin: '5px',
                },
            },
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
                        margin: '20px',
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
                        margin: '5px',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: theme.palette.delete.main,
                        color: theme.palette.text.secondary,
                        boxSizing: 'border-box',
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
                        margin: '5px',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: theme.palette.edit.main,
                        color: theme.palette.text.secondary,
                        boxSizing: 'border-box',
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
                        marginTop: '20px',
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
                {
                    props: { variant: 'cancel' },
                    style: ({ theme }) => ({
                        fontSize: '14px',
                        padding: '5px 10px',
                        margin: '5px',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: theme.palette.add.main,
                        color: theme.palette.text.secondary,
                        boxSizing: 'border-box',
                        width: '50%',
                        '&:hover': {
                            backgroundColor: theme.palette.add.altermain,
                        },
                    }),
                },
            ],
        },
        MuiBox: {
            styleOverrides: {
                root: {
                    minHeight: '100vh',
                    minWidth: '100vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '10px',
                },
            },
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    padding: '10px',
                    borderCollapse: 'separate',
                    borderSpacing: '0 5px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                    width: '99vw',
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: ({ theme }) => ({
                    fontSize: '14px',
                    fontWeight: 'bold',
                    borderRadius: '10px 10px 0 0',
                    backgroundColor: theme.palette.divider,
                }),
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
                    paddingRight: '25px',
                    border: `1px solid ${theme.palette.divider}`,
                    fontSize: '14px',
                    '&:first-of-type': {
                        borderRadius: '10px 0 0 10px',
                    },
                    '&:last-child': {
                        borderRadius: '0 10px 10px 0',
                    },
                    width: 'auto',
                    whiteSpace: 'nowrap',
                }),
                head: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    padding: '8px 10px',
                },
            },
        },
        MuiModal: {
            styleOverrides: {
                root: ({ theme }) => ({
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    height: 200,
                    backgroundColor: theme.palette.background.paper,
                    border: `10px solid ${theme.palette.background.even}`,
                    borderRadius: '10px',
                    padding: 40,
                }),
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
            default: '#292929',
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

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#aab4be',
                ...theme.applyStyles('dark', {
                    backgroundColor: '#8796A5',
                }),
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: '#001e3c',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
        ...theme.applyStyles('dark', {
            backgroundColor: '#003892',
        }),
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        borderRadius: 20 / 2,
        ...theme.applyStyles('dark', {
            backgroundColor: '#8796A5',
        }),
    },
}));

export { lightTheme, darkTheme, MaterialUISwitch };