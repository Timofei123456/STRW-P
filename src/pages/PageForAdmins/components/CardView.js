import React, { useState } from 'react';
import { Card, CardContent, TextField, CardActions, Typography, Button, Grid2 } from '@mui/material';
import ModalWindowForDelete from './ModalWindowForDelete';

const CardView = ({ clients, delClient, updateClient }) => {
    const [editingClientId, setEditingClientId] = useState(null);
    const [editedClientData, setEditedClientData] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [clientIdToDelete, setClientIdToDelete] = useState(null);

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

    const handleDeleteClick = (id) => {
        setClientIdToDelete(id);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleDelete = () => {
        delClient(clientIdToDelete);
        setOpenModal(false);
    };

    return (
        <div>
            <Grid2 container spacing={2} justifyContent="center">
                {clients.map(client => (
                    <Grid2 item key={client.id} xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    Name: {editingClientId === client.id ? (
                                        <TextField
                                            name="name"
                                            value={editedClientData.name}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        client.name
                                    )}
                                </Typography>
                                <Typography variant="h6">
                                    Surname: {editingClientId === client.id ? (
                                        <TextField
                                            name="surname"
                                            value={editedClientData.surname}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        client.surname
                                    )}
                                </Typography>
                                <Typography variant="h5">
                                    Phone: {editingClientId === client.id ? (
                                        <TextField
                                            name="phone"
                                            value={editedClientData.phone}
                                            onChange={handleInputChange}
                                        />
                                    ) : (
                                        client.phone
                                    )}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="edit" onClick={() => handleEditClick(client)}>
                                    {editingClientId === client.id ? 'OK' : 'EDIT'}
                                </Button>
                                <Button variant="delete" onClick={() => handleDeleteClick(client.id)}>
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
            <ModalWindowForDelete
                open={openModal}
                handleClose={handleCloseModal}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default CardView;