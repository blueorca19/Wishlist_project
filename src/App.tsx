import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import RegistrationForm from './components/Auth/RegisterForm';
import RegistrationModal from './components/Auth/RegistrationModal';

const App: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <h1>Welcome to My App</h1>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Open Registration Form
            </Button>
            <RegistrationModal open={open} onClose={handleClose} />
        </div>
    );
};

export default App;