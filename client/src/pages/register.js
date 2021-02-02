import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from "react-bootstrap"

export default function Register() { 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const registered = {
      username: username,
      password: password
    }

    setUsername("");
    setPassword("");

    const response = await axios.post('http://localhost:4000/user/register', registered);
    console.log(response);

  }

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Group>
      
          <Button variant="danger" type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  )
  
}