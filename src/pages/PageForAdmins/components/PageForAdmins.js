import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients } from '../../../redux/slicers/clientSlice';
import { addClient, deleteClient } from '../../../redux/slicers/clientSlice';
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
        await dispatch(deleteClient({ id, token }));
    };

    const handleAddClient = async (client) => {
        await dispatch(addClient({ client, token }));
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
                        <Table clients={clients} delClient={handleDeleteClient} />
                    ) : (
                        <CardView clients={clients} delClient={handleDeleteClient} />
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