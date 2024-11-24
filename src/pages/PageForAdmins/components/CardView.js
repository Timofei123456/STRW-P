import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid } from '@mui/material';

const CardView = ({ clients, delClient }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {clients.map(client => (
        <Grid item key={client.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {client.name}
              </Typography>
              <Typography variant="h5" component="div">
              {client.surname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: {client.phone}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="error" onClick={() => delClient(client.id)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardView;