import { useContext, useState } from 'react'
import axios from 'axios'
import { Button, TextField } from '@material-ui/core'

import { AuthContext } from '../../AuthContext'

export default function LoginForm () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { refreshAuthStatus } = useContext(AuthContext)

  const handleSubmit = event => {
    event.preventDefault()

    const credentials = {
      username: username,
      password: password,
    }

    setUsername('')
    setPassword('')
    axios.post('/api/user/login', credentials)
      .then(() => {refreshAuthStatus()})
  }

  return (
    <form noValidate onSubmit={handleSubmit}
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
              type="submit">Login</Button>
    </form>
  )

}