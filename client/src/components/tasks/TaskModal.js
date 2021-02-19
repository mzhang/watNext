import React, { useState } from 'react';
import {Modal, Fade, Backdrop, Button, Container, IconButton} from '@material-ui/core/';
// import { makeStyles } from '@material-ui/core/styles';
import CommentDeck from '../comments/CommentDeck';
import CommentForm from '../comments/CommentForm';
import ChatIcon from '@material-ui/icons/Chat';

export default function TaskModal(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};

  return (
    <>
      <IconButton onClick={handleOpen} color="primary"> 
        <ChatIcon variant="contained" />{props.commentCount}
      </IconButton>
      
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}>
        <Fade in={open}>
          <Container>
            <CommentDeck id={props.id} />
            <CommentForm id={props.id} />
          </Container>
        </Fade>
      </Modal>
    </>
  );
}