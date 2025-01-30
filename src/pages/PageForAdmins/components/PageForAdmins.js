import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients, addClient, deleteClient, updateClient } from '../../../redux/slices/clientSlice';
import Form from './Form';
import Table from './Table';
import CardView from './CardView';
import { Button, Box, Container, Typography } from '@mui/material';

const PageForAdmins = () => {
    const [view, setView] = useState('table');
    const dispatch = useDispatch();

    const clients = useSelector(state => state.clientState.clients || []);
    const error = useSelector(state => state.clientState.error || null);
    const token = useSelector(state => state.authState.token);

    useEffect(() => {
        if (token) {
            dispatch(fetchClients(token));
        }
    }, [dispatch, token]);

    const handleDeleteClient = async (id) => {
        try {
            await dispatch(deleteClient({ id, token }));
            dispatch(fetchClients(token));
        } catch (err) {
            console.error("Error deleting client:", err);
        }
    };

    const handleAddClient = async (client) => {
        try {
            await dispatch(addClient({ client, token }));
            dispatch(fetchClients(token));
        } catch (err) {
            console.error("Error adding client:", err);
        }
    };

    const handleUpdateClient = async (updatedData) => {
        try {
            await dispatch(updateClient({ client: updatedData, token }));
            dispatch(fetchClients(token));
        } catch (err) {
            console.error("Error updating client:", err);
        }
    };

    const toggleView = () => {
        setView(view === 'table' ? 'card' : 'table');
    };

    return (
        <>
            <div>
                <Form handleSubmit={handleAddClient} inClient={{ name: "", surname: "", phone: "" }} />
                <Container>
                    <Button variant="auth" onClick={toggleView}>
                        {view === 'table' ? 'Переключиться на карточки' : 'Переключиться на таблицу'}
                    </Button>
                </Container>
            </div>

            <Box style={{ height: '100vh', width: '100vw' }}>
                {error ? (
                    <div>Error: {error}</div>
                ) : Array.isArray(clients) && clients.length > 0 ? (
                    view === 'table' ? (
                        <Table clients={clients} delClient={handleDeleteClient} updateClient={handleUpdateClient} />
                    ) : (
                        <CardView clients={clients} delClient={handleDeleteClient} updateClient={handleUpdateClient} />
                    )
                ) : (
                    <Container>
                        <Typography>No clients available</Typography>
                    </Container>
                )}
            </Box>
        </>
    );
};

export default PageForAdmins;