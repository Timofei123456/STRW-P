import React, { useState } from "react";
import { ThemeProvider, } from '@mui/material/styles';
import { CssBaseline, Paper, Typography, TextField, Button } from '@mui/material';
import { lightTheme, darkTheme } from '../../../theme/theme';
import { useNavigate } from 'react-router-dom';

function SignIn({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "1" && password === "1") {
      setAuth(true);
      navigate("/");
    } else {
      alert("Неверные данные для входа");
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Paper elevation={3}>
        <Typography variant="h6" component="h2">
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            fullWidth
          />
          <Button
            type="submit"
            variant="auth"
            color="primary"
            fullWidth
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </ThemeProvider>
  );
}

export default SignIn;