import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid2 } from '@mui/material';

const CardView = ({ clients, delClient }) => {
  return (
    <Grid2 container spacing={2} justifyContent="center">
      {clients.map(client => (
        <Grid2 item key={client.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Name: {client.name}
              </Typography>
              <Typography variant="h6">
                Surname: {client.surname}
              </Typography>
              <Typography variant="h5">
                Phone: {client.phone}
              </Typography>
            </CardContent>
            <CardActions>
            <Button variant="edit">
                Edit
              </Button>
              <Button variant="delete" onClick={() => delClient(client.id)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default CardView;