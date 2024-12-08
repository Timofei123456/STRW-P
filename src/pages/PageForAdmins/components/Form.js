import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = ({ handleSubmit, inClient }) => {
  const formik = useFormik({
    initialValues: inClient,
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Имя обязательно'),
      surname: Yup.string()
        .required('Фамилия обязательна'),
      phone: Yup.string()
        .required('Телефон обязателен')
        .matches(/^\+375\s?\(?\d{2}\)?\s?\d{7}$/, 'Введите корректный номер телефона')
    }),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Container>
        <Typography variant="h6" component="h2">
          Add
        </Typography>
        <TextField
          label="Name"
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          label="Surname"
          type="text"
          name="surname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.surname}
          error={formik.touched.surname && Boolean(formik.errors.surname)}
          helperText={formik.touched.surname && formik.errors.surname}
        />
        <TextField
          label="Phone"
          type="text"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <Button type="submit" variant="add">Add</Button>
      </Container>
    </form>
  );
};

export default Form;