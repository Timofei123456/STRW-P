import { ThemeProvider } from '@mui/material/styles';
import { Table, TableContainer, Button, TableBody, TableRow, TableHead, Paper, TableCell } from "@mui/material";
import lightTheme from '../lightTheme';

const ClientTable = ({ clients, delClient }) => {

  return (
    <ThemeProvider theme={lightTheme}>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client, index) => (
            <TableRow key={index}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.surname}</TableCell>
              <TableCell>{client.phone}</TableCell>
              <TableCell>
                <Button variant="delete"
                  onClick={() => delClient(client.id)}>Delete</Button>
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