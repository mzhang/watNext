import { useState } from 'react'
import axios from 'axios'
import { Button, TextField } from '@material-ui/core'

export default function RegisterForm () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()

    const registerPayload = {
      username: username,
      password: password,
    }

    setUsername('')
    setPassword('')

    await axios.post('/api/user/register', registerPayload)
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      style={{ display: 'grid', maxWidth: '200px', margin: '5%' }}>

      <TextField
        id="filled-basic" label="Username" variant="filled"
        value={username} onChange={e => setUsername(e.target.value)}
      />
      <TextField
        id="filled-password-input" label="Password"
        type="password" autoComplete="current-password" variant="filled"
        value={password} onChange={e => setPassword(e.target.value)}
      />
      <Button variant="contained" color="secondary"
              type="submit">Register</Button>
    </form>
  )

}