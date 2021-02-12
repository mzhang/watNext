import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function ToggleComplete(props) {

    const markAsDone = async () => {
        await axios.post('http://localhost:4000/task/markAsDone/' + props.id)
        props.setIsDone(true)
    }
    
    const markAsUndone = async () => {
        await axios.post('http://localhost:4000/task/markAsUndone/' + props.id)
        props.setIsDone(false)
    }
    
    if (!props.isDone) {
        return <Button variant="contained" color="primary" onClick={() => { markAsDone() }}>Mark as Done!</Button>
    }
    else {
        return <Button variant="contained" color="primary" onClick={() => { markAsUndone() }}>Mark as Undone!</Button>
    }
}