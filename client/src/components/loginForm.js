import React, { useState } from 'react';
import axios from 'axios';
import {Button, TextField, Container} from '@material-ui/core/';

export default function Register() { 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const credentials = {
      username: username,
      password: password
    }

    setUsername("");
    setPassword("");
    console.log(credentials)
    const response = await axios.post('http://localhost:4000/user/login', credentials);
    console.log(response);

  }

  return (
    <Container>
        <form noValidate onSubmit={handleSubmit}>
            <div><TextField id="filled-basic" label="Username" variant="filled" 
            value={username} onChange={e => setUsername(e.target.value)}/></div>
            <div><TextField id="filled-password-input" label="Password"
                type="password" autoComplete="current-password" variant="filled"
                value={password} onChange={e => setPassword(e.target.value)}
            /></div>
            <Button type="submit">Login</Button>
        </form>
    </Container>
  )
  
}