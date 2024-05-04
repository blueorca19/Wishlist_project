import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import RegistrationForm from './RegisterForm';

interface RegistrationModalProps {
    open: boolean;
    onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Registration Form</DialogTitle>
            <DialogContent>
                <RegistrationForm />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default RegistrationModal;