import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { AuthContext } from '../../AuthContext';

export default function LogoutButton() {
    const { updateAuthStatus } = useContext(AuthContext);
    const logout = async () => {
        await axios.get('http://localhost:4000/user/logout')
        updateAuthStatus()
    }
    return (
        <Button variant="contained" color="primary" onClick={() => { logout() }}>Logout</Button>
    )
}