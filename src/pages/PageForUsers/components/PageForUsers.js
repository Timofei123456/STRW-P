import React, { useEffect } from 'react';
import { Box, Typography, Paper, Grid2 } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAccountsOfCurrentUser } from '../../../redux/slices/accountSlice';
import { fetchTransactionsOfCurrentUser } from '../../../redux/slices/transactionSlice';
import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule, ValidationModule, PaginationModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const PageForUsers = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.userState.currentUser);
    const accounts = useSelector(state => state.accountState.accounts);
    const transactions = useSelector(state => state.transactionState.transactions);
    const token = useSelector(state => state.authState.token);
    const modules = [ClientSideRowModelModule, ValidationModule, PaginationModule];


    const clientData = {
        name: currentUser ? currentUser.client.name : 'No Client',
        surname: currentUser ? currentUser.client.surname : 'No Client',
        phone: currentUser ? currentUser.client.phone : 'No Client',
    };

    useEffect(() => {
        if (token) {
            dispatch(fetchAccountsOfCurrentUser(token));
            dispatch(fetchTransactionsOfCurrentUser(token));
        }
    }, [dispatch, token]);

    const columnDefs = [
        { field: 'id', headerName: 'ID' },
        { field: 'type', headerName: 'Type' },
        { field: 'amount', headerName: 'Amount' },
        {
            field: 'date',
            headerName: 'Date',
            valueFormatter: params => new Date(params.value).toLocaleDateString(),
        },
    ];

    return (
        <Box>
            <Paper variant="main">
                <Typography variant="h6">Client Information</Typography>
                <Typography>Name: {clientData.name}</Typography>
                <Typography>Surname: {clientData.surname}</Typography>
                <Typography>Phone: {clientData.phone}</Typography>
            </Paper>

            <Grid2 container spacing={2}>
                <Grid2 item xs={12} md={6}>
                    <Paper variant="main">
                        <Typography variant="h6">Accounts</Typography>
                        {accounts.length > 0 ? (
                            accounts.map(account => (
                                <Paper key={account.id} variant="main" style={{ margin: '10px 0' }}>
                                    <Typography variant="h6">Account Number: {account.accountNumber}</Typography>
                                    <Typography variant="h5">Balance: ${account.balance}</Typography>
                                </Paper>
                            ))
                        ) : (
                            <Typography>No accounts available</Typography>
                        )}
                    </Paper>
                </Grid2>

                <Grid2 item xs={12} md={6}>
                    <Paper variant="main">
                        <Typography variant="h6">Transactions</Typography>
                        <AgGridReact
                            columnDefs={columnDefs}
                            rowData={transactions}
                            pagination={true}
                            paginationPageSize={20}
                            modules={modules}
                        />
                    </Paper>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default PageForUsers;