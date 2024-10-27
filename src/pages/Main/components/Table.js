import { ThemeProvider } from '@mui/material/styles';
import { Table, TableContainer, Button, TableBody, TableRow, TableHead, Paper, TableCell } from "@mui/material";
import { lightTheme, darkTheme } from '../../../theme/theme';

const ClientTable = ({ clients, delClient }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <TableContainer component={Paper}>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Surname</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>Actions</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {clients.map(client => (
                      <TableRow key={client.id}>
                          <TableCell>{client.name}</TableCell>
                          <TableCell>{client.surname}</TableCell>
                          <TableCell>{client.phone}</TableCell>
                          <TableCell>
                              <Button variant="edit">EDIT</Button>
                              <Button variant="delete" onClick={() => delClient(client.id)}>DELETE</Button>
                          </TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
      </TableContainer>
      </ThemeProvider>
  );
};

export default ClientTable;