import { ThemeProvider } from '@mui/material/styles';
import { TextField, Button, Box } from '@mui/material';
import { useState } from "react";
import theme from './formTheme';

const Form = ({ handleSubmit, inClient }) => {
  const [client, setClient] = useState(inClient);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setClient({ ...client, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(client);
    setClient(inClient);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        onSubmit={onSubmit}
      >
        <TextField
          label="Name"
          type="text"
          name="name"
          value={client.name}
          onChange={handleChange}
        />
        <TextField
          label="Surname"
          type="text"
          name="surname"
          value={client.surname}
          onChange={handleChange}
        />
        <TextField
          label="Phone"
          type="text"
          name="phone"
          value={client.phone}
          onChange={handleChange}
        />
        <Button type="submit">Add</Button>
      </Box>
    </ThemeProvider>
  );
};

export default Form;