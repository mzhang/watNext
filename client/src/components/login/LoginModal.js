import { useState } from 'react'
import { Dialog, Button } from '@material-ui/core/'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function TaskModal () {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {setOpen(true)}
  const handleClose = () => {setOpen(false)}

  return (
    <>

      <Button onClick={handleOpen} variant="contained"
              color="secondary">Login</Button>

      <Dialog open={open} onClose={handleClose}>
        <LoginForm/>
        <RegisterForm/>
      </Dialog>
    </>
  )
}