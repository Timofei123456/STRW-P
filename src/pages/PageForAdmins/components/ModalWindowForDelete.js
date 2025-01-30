import React from 'react';
import { Modal, Button, Box, Typography } from '@mui/material';

const ModalWindowForDelete = ({ open, handleClose, handleDelete }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box>
                <Typography variant="h6" component="h2">
                    Удалить клиента?
                </Typography>
                <Typography>
                    Вы уверены, что хотите удалить этого клиента?
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="delete" onClick={handleDelete}>
                        Удалить
                    </Button>
                    <Button variant="cancel" onClick={handleClose}>
                        Отмена
                    </Button>
                    </Box>
            </Box>
        </Modal>
    );
};

export default ModalWindowForDelete;