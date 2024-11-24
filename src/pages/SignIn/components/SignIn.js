import React, { useState, useEffect } from "react";
import { CssBaseline, Paper, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser , signErrorUser  } from '../../../redux/slicers/authSlice';
import { signIn  } from '../../../api/api';

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const error = useSelector(state => state.authState.error);
  const isAuthenticated = useSelector(state => state.authState.isAuthenticated);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const token = await signIn (username, password);
      dispatch(signInUser ({ token }));
    } catch (error) {
      dispatch(signErrorUser (error.message));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(signErrorUser (null));
    }
  }, [error, dispatch]);

  return (
    <>
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
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            fullWidth
            required
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
      </>
  );
}

export default SignIn;