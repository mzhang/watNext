import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function LogoutButton() {

    const logout = async () => {
        await axios.get('http://localhost:4000/user/logout')
    }
    return (
        <Button variant="contained" color="primary" onClick={() => { logout() }}>Logout</Button>
    )
}