import React, { useState } from 'react';
import { Modal, Fade, Backdrop, Container, Button } from '@material-ui/core/';
// import { makeStyles } from '@material-ui/core/styles';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function TaskModal(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};

  return (
    <>
      
      <Button onClick={handleOpen} variant="contained" color="secondary">Login</Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
      >
        <Fade in={open}>
          <div 
        style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>
            <LoginForm />
            <RegisterForm />
          </div>
        </Fade>
      </Modal>
    </>
  );
}