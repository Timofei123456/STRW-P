import React, { useEffect } from 'react';
import { Box, Typography, Paper, Grid2, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAccountsOfCurrentUser  } from '../../../redux/slicers/accountSlice';
import { fetchTransactionsOfCurrentUser  } from '../../../redux/slicers/transactionSlice';

const PageForUsers = () => {
    const dispatch = useDispatch();
    const currentUser  = useSelector(state => state.userState.currentUser );
    const accounts = useSelector(state => state.accountState.accounts);
    const transactions = useSelector(state => state.transactionState.transactions);
    const token = useSelector(state => state.authState.token);

    const clientData = {
        name: currentUser  ? currentUser.client.name : 'No Client',
        surname: currentUser  ? currentUser.client.surname : 'No Client',
        phone: currentUser  ? currentUser.client.phone : 'No Client',
    };

    useEffect(() => {
        if (token) {
            dispatch(fetchAccountsOfCurrentUser (token));
            dispatch(fetchTransactionsOfCurrentUser (token));
        }
    }, [dispatch, token]);

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
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Transaction ID</TableCell>
                                        <TableCell>Amount</TableCell>
                                        <TableCell>Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {transactions.length > 0 ? (
                                        transactions.map(transaction => (
                                            <TableRow key={transaction.id}>
                                                <TableCell>{transaction.id}</TableCell>
                                                <TableCell>${transaction.amount}</TableCell>
                                                <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={3}>No transactions available</TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default PageForUsers;