import React, { useState } from 'react';
import {Dialog, Fade, Backdrop, Container, IconButton} from '@material-ui/core/';
// import { makeStyles } from '@material-ui/core/styles';
import CommentDeck from '../comments/CommentDeck';
import CommentForm from '../comments/CommentForm';

export default function TaskModal(props) {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};
  return (
    <>
      <IconButton onClick={handleOpen} color="primary"> 
        {props.commentCount ? "💬" : "🗨️"}       
      </IconButton>
      
      <Dialog open={open} onClose={handleClose} scroll="body">
          <CommentDeck id={props.id} />
          <CommentForm id={props.id} />
      </Dialog>
    </>
  );
}