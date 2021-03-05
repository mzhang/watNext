import { useContext } from 'react'
import { Button } from '@material-ui/core'
import axios from 'axios'

import { AuthContext } from '../../AuthContext'

export default function LogoutButton () {
  const { refreshAuthStatus } = useContext(AuthContext)
  const logout = async () => {
    await axios.get('/api/user/logout')
    refreshAuthStatus()
  }

  return (
    <Button variant="contained" color="secondary"
            onClick={logout}>Logout</Button>
  )
}