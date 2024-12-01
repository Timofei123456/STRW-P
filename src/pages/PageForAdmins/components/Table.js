import { Table, Button, TableBody, TableRow, TableHead, TableCell, Paper } from "@mui/material";

const ClientTable = ({ clients, delClient }) => {
    return (
        <Paper>
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
        </Paper>
    );
};

export default ClientTable;