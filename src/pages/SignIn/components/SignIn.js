import React, { useEffect } from "react";
import { CssBaseline, Paper, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser , signErrorUser  } from '../../../redux/slicers/authSlice';
import { signIn } from '../../../api/authApi';
import { fetchCurrentUser  } from '../../../api/userApi';
import { setCurrentUser  } from '../../../redux/slicers/userSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const error = useSelector(state => state.authState.error);
  const isAuthenticated = useSelector(state => state.authState.isAuthenticated);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Имя пользователя обязательно'),
      password: Yup.string()
        .required('Пароль обязателен')
        .min(4, 'Пароль должен содержать минимум 4 символов'),
    }),
    onSubmit: async (values) => {
      const { username, password } = values;

      try {
        const token = await signIn(username, password);
        dispatch(signInUser ({ token }));

        const userInfo = await fetchCurrentUser (username, token);
        dispatch(setCurrentUser (userInfo));

        navigate("/");
      } catch (error) {
        dispatch(signErrorUser (error.message));
      }
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 100);

      return () => clearTimeout(timer);
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
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Username"
            type="text"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            margin="normal"
            fullWidth
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            margin="normal"
            fullWidth
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            variant="auth"
            color="primary"
            fullWidth
          >
            Sign In
          </Button>
          {error && <Typography color="error">{error}</Typography>}
        </form>
      </Paper>
    </>
  );
}

export default SignIn;