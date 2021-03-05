import { useState } from 'react'
import { Dialog, Button } from '@material-ui/core'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function TaskModal () {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {setIsOpen(true)}
  const handleClose = () => {setIsOpen(false)}

  return (
    <>
      <Button onClick={handleOpen} variant="contained"
              color="secondary">Login</Button>

      <Dialog open={isOpen} onClose={handleClose}>
        <LoginForm/>
        <RegisterForm/>
      </Dialog>
    </>
  )
}