

import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import StaffManagement from './components/StaffManagement';
import Enrollment from './components/Enrollment';
import Grading from './components/Grading';
import FeesManagement from './components/FeesManagement';
import Academics from './components/Academics';
import Homepage from './Homepage';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <Router>
            <div>
                {isLoggedIn ? (
                    <List>
                        <ListItem button component={Link} to="/staffmanagement">
                            <ListItemText primary="Staff Management" />
                        </ListItem>
                        <ListItem button component={Link} to="/enrollment">
                            <ListItemText primary="Enrollment" />
                        </ListItem>
                        <ListItem button component={Link} to="/grading">
                            <ListItemText primary="Grading" />
                        </ListItem>
                        <ListItem button component={Link} to="/feesmanagement">
                            <ListItemText primary="Fees Management" />
                        </ListItem>
                        <ListItem button component={Link} to="/academics">
                            <ListItemText primary="Academics" />
                        </ListItem>
                    </List>
                ) : (
                    <Homepage onLogin={handleLogin} />
                )}
                <Routes>
                    <Route path="/staffmanagement" element={<StaffManagement />} />
                    <Route path="/enrollment" element={<Enrollment />} />
                    <Route path="/grading" element={<Grading />} />
                    <Route path="/feesmanagement" element={<FeesManagement />} />
                    <Route path="/academics" element={<Academics />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;