import React from 'react';
import { IconButton } from '@material-ui/core/';
import axios from 'axios';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

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
        return (
            <IconButton color="primary" onClick={() => { markAsDone() }}>
                🎉
            </IconButton> 
        )
    }
    else {
        return (
            <IconButton color="primary" onClick={() => { markAsUndone() }}>
                🎉
            </IconButton> 
        )
    }
}