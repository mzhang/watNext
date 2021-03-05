import { useRef } from 'react'
import { IconButton } from '@material-ui/core/'
import axios from 'axios'
import Reward from 'react-rewards'

export default function ToggleComplete (props) {
    const rewardElement = useRef(null)

    const markAsDone = async () => {
        await axios.post('/api/task/markAsDone/' + props.id)
        rewardElement.current.rewardMe()
        props.setIsDone(true)

    }

    const markAsUndone = async () => {
        await axios.post('/api/task/markAsUndone/' + props.id)
        props.setIsDone(false)
    }

    return (
        <Reward
            ref={rewardElement}
            type={'confetti'}
        >
            <IconButton
                color="primary"
                onClick={props.isDone
                    ? () => { markAsUndone() }
                    : () => { markAsDone() }}
            >
                🎉
            </IconButton>
        </Reward>
    )
}