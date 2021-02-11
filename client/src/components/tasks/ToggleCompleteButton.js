import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function ToggleComplete(props) {
    const [isComplete, setCompleteStatus] = useState(props.isDone);

    const markAsDone = async () => {
        await axios.post('http://localhost:4000/task/markAsDone/' + props.id)
        console.log(isComplete);
        setCompleteStatus(true)
    }
    
    const markAsUndone = async () => {
        await axios.post('http://localhost:4000/task/markAsUndone/' + props.id)
        console.log(isComplete);
        setCompleteStatus(false)
    }
    
    if (!isComplete) {
        return <Button variant="contained" color="primary" onClick={() => { markAsDone() }}>Mark as Done!</Button>
    }
    else {
        return <Button variant="contained" color="primary" onClick={() => { markAsUndone() }}>Mark as Undone!</Button>
    }
}