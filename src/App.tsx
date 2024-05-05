import React, { useState } from 'react';
import { Button } from '@mui/material';
import RegistrationModal from './components/Auth/RegistrationModal';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/Home";
import { AboutUs } from './pages/AboutUs';
import Login  from './pages/Login';
import  CreateWishlist from './pages/CreateWishlist';
import CreateGift from './pages/CreateGift';
import Account from './pages/Account';

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
            
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Registration
            </Button>
            <RegistrationModal open={open} onClose={handleClose} />
            
            <Router>              
                <ScrollToTop />              
                <Routes>                 
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/create" element={<CreateWishlist />} />
                    <Route path="/createGift" element={<CreateGift />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;