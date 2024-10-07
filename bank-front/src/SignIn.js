import { ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import theme from './signInTheme';

function SignIn({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setAuth(true);
      setOpen(false);
    } else {
      alert("Неверные данные для входа");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
      >
        Login
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: '#f9f9f9',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              sx={{
                margin: '10px',
                width: '100%',
              }}
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              sx={{
                margin: '10px',
                width: '100%',
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                margin: '20px',
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '5px',
                backgroundColor: '#4CAF50',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#3e8e41',
                },
              }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default SignIn;