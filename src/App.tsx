<<<<<<< HEAD

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={< />} />
              <Route path="/" element={< />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

=======
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

>>>>>>> 0aa4cbc07289948c9d6a03c0fc383fb7cb555780
export default App;