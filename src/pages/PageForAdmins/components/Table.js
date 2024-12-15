import React, { useState } from 'react';
import { Table, Button, TableBody, TableRow, TableHead, TableCell, Paper, TextField } from "@mui/material";

const ClientTable = ({ clients, delClient, updateClient }) => {
    const [editingClientId, setEditingClientId] = useState(null);
    const [editedClientData, setEditedClientData] = useState({});

    const handleEditClick = (client) => {
        if (editingClientId === client.id) {
            const updatedData = {
                id: client.id,
                name: editedClientData.name,
                surname: editedClientData.surname,
                email: editedClientData.email,
                phone: editedClientData.phone,
            };
            updateClient(updatedData);
            setEditingClientId(null);
        } else {
            setEditingClientId(client.id);
            setEditedClientData({
                name: client.name,
                surname: client.surname,
                email: client.email,
                phone: client.phone,
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedClientData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Surname</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map(client => (
                        <TableRow key={client.id}>
                            <TableCell>
                                {editingClientId === client.id ? (
                                    <TextField
                                        name="name"
                                        value={editedClientData.name}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    client.name
                                )}
                            </TableCell>
                            <TableCell>
                                {editingClientId === client.id ? (
                                    <TextField
                                        name="surname"
                                        value={editedClientData.surname}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    client.surname
                                )}
                            </TableCell>
                            <TableCell>
                                {editingClientId === client.id ? (
                                    <TextField
                                        name="email"
                                        value={editedClientData.email}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    client.email
                                )}
                            </TableCell>
                            <TableCell>
                                {editingClientId === client.id ? (
                                    <TextField
                                        name="phone"
                                        value={editedClientData.phone}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    client.phone
                                )}
                            </TableCell>
                            <TableCell>
                                <Button variant="edit" onClick={() => handleEditClick(client)}>
                                    {editingClientId === client.id ? 'OK' : 'EDIT'}
                                </Button>
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