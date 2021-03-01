import React, { useState } from 'react';
import axios from 'axios';
import {Button, TextField, Container} from '@material-ui/core/';

export default function RegisterForm(props) { 
  const [comment, setComment] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const commentPayload = {
      task: props.id,
      comment: comment
    }

    setComment("");
    await axios.post('http://localhost:4000/task/addComment', commentPayload).catch(err => console.log(err))
  }

  return (
        <form noValidate onSubmit={handleSubmit} style={{display:"grid", padding: "5%"}}> 
            <TextField
              id="filled-multiline-static"
              label="Cool comment goes here!"
              multiline
              rows={4}
              
              variant="filled"
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">Post Comment</Button>
        </form>
  )
  
}