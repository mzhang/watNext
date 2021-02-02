import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function LogoutButton() {

    const logout = async () => {
        const res = await axios({
        method: 'get',
        url: 'http://localhost:4000/login/logout'
        })}
    
    return (
        <Button onClick={() => { logout() }}>Logout</Button>
    )
}