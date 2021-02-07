import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function isAuthenticatedButton() {

    const checkAuthenticated = async () => {
        await axios.get("http://localhost:4000/user/authenticated")
        .catch(err => console.log(err))
        .then(res => console.log(res))
    }
    
    return (
        <Button variant="contained" color="primary" onClick={() => { checkAuthenticated() }}>checkAuthenticated</Button>
    )
}