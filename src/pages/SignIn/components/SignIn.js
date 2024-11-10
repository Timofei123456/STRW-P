import React, { useState, useEffect } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Paper, Typography, TextField, Button } from '@mui/material';
import { lightTheme, darkTheme } from '../../../theme/theme';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser, signErrorUser, authenticateUser } from '../../../redux/slicers/authSlice';
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const error = useSelector(state => state.authState.error);
  const users = useSelector(state => state.userState.users);
  const isAuthenticated = useSelector(state => state.authState.isAuthenticated);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await dispatch(authenticateUser ({ username, password, users }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(signInUser ({ username }));
      navigate("/");
    }
  }, [isAuthenticated, dispatch, navigate, username]);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(signErrorUser (null));
    }
  }, [error, dispatch]);


  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Paper variant="auth" elevation={3}>
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