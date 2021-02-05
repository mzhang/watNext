import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Modal, Fade, Backdrop, Button} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState("");
  const classes = useStyles();

  useEffect(()=>{
    if (open) {
      axios.get("http://localhost:4000/task/getComments/"+props.id)
    .then((data) => {console.log(data); setComments(data.data.comment.map((x)=>x.commentContent));})
    .catch((err) => setComments(err))
    }
  },[open])

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
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">{comments}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}