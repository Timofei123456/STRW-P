import React, { useEffect } from "react";
import { CssBaseline, Paper, Typography, TextField, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signErrorUser } from '../../../redux/slicers/authSlice'; // Импортируем необходимые действия
import { fetchCurrentUser } from '../../../redux/slicers/userSlice'; // Импортируем thunk для получения текущего пользователя
import { useFormik } from 'formik';
import * as Yup from 'yup';

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const error = useSelector(state => state.authState.error);
  const isAuthenticated = useSelector(state => state.authState.isAuthenticated);
  const loading = useSelector(state => state.authState.loading); // Получаем состояние загрузки

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
        .min(4, 'Пароль должен содержать минимум 4 символа'),
    }),
    onSubmit: async (values) => {
      const { username, password } = values;

      dispatch(signIn({ username, password }))
        .unwrap()
        .then((token) => {
          dispatch(fetchCurrentUser(token));
            navigate("/")
        })
        .catch((error) => {
          const errorMessage = error.response?.data?.message || 'Ошибка входа';
          dispatch(signErrorUser(errorMessage));
        });
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
        navigate("/")
    }
  }, [isAuthenticated, navigate]);

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
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
          >
            {loading ? ' ' : 'Sign In'}
          </Button>
          {error && (
            <Typography color="error" style={{ marginTop: '10px' }}>
              {error}
            </Typography>
          )}
        </form>
      </Paper>
    </>
  );
}

export default SignIn;