import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LogoutButton from './login/LogoutButton';

import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

export default function Navbar() {
    const {user, isLoggedIn} = useContext(AuthContext);

    const loginButton = (<Button>Login</Button>)
    return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" style={{fontWeight: "700", flexGrow:1}}>
            📌 {user?.username ? user.username : "SE25"}'s Tasks
            </Typography>
            {isLoggedIn ? <LogoutButton /> : loginButton}
        </Toolbar>
    </AppBar>)
}