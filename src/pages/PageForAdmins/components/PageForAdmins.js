import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';
import CardView from './CardView';
import ClientAPI from "../../../api/services";
import { Button, Box, Container } from '@mui/material';

const PageForAdmins = ({ clients, setClients }) => {
    const [view, setView] = useState('table');

    const delCli = (id) => {
        if (ClientAPI.delete(id)) {
            setClients(clients.filter((client) => client.id !== id));
        }
    };

    const addClient = (client) => {
        const newClient = ClientAPI.add(client);
        if (newClient) {
            setClients([...clients, newClient]);
        }
    };

    const toggleView = () => {
        setView(view === 'table' ? 'card' : 'table');
    };

    return (
        <>
            <div>
                <Form handleSubmit={addClient} inClient={{ name: "", surname: "", phone: "" }} />
                <Container>
                    <Button variant="auth" onClick={toggleView}>
                        {view === 'table' ? 'Переключиться на карточки' : 'Переключиться на таблицу'}
                    </Button>
                </Container>
            </div>


            <Box style={{ height: '100vh', width: '100vw' }}>
                {view === 'table' ? (
                    <Table clients={clients} delClient={delCli} />
                ) : (
                    <CardView clients={clients} delClient={delCli} />
                )}
            </Box>
        </>
    );
};

export default PageForAdmins;