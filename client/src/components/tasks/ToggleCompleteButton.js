import React from 'react';
import { IconButton } from '@material-ui/core/';
import axios from 'axios';
import Reward from 'react-rewards';

export default function ToggleComplete(props) {

    const markAsDone = async () => {
        await axios.post('/api/task/markAsDone/' + props.id)
        props.setIsDone(true)
        
    }

    const markAsUndone = async () => {
        await axios.post('/api/task/markAsUndone/' + props.id)
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