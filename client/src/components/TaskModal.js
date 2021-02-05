import React, { useState, useEffect } from 'react';
import {Modal, Fade, Backdrop, Button, Container} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import CommentDeck from './CommentDeck';
import CommentForm from './CommentForm';

export default function TaskModal(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Activate Modal
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Container>
            <CommentDeck id={props.id} />
            <CommentForm id={props.id} />
          </Container>
        </Fade>
      </Modal>
    </div>
  );
}