import { Button, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from "react";

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
      <form onSubmit={onSubmit}>
      <Container>
        <Typography variant="h6" component="h2">
          Add
        </Typography>
        <TextField
          label="Name"
          type="text"
          name="name"
          value={client.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Surname"
          type="text"
          name="surname"
          value={client.surname}
          onChange={handleChange}
          required
        />
        <TextField
          label="Phone"
          type="text"
          name="phone"
          value={client.phone}
          onChange={handleChange}
          required
        />
        <Button type="submit"
            variant="add">Add</Button>
      </Container>
      </form>
  );
};

export default Form;