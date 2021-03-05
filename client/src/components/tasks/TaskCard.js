import { useState, useContext } from 'react'
import { Card, CardContent } from '@material-ui/core/'
import { Typography } from '@material-ui/core/'
import TaskModal from './TaskModal'
import ToggleCompleteButton from './ToggleCompleteButton'
import taskCardStyle from './TaskCard.module.css'
import { AuthContext } from '../../AuthContext.js'

export default function TaskCard (props) {
    const [isDone, setIsDone] = useState(props.isDone)
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <Card className={taskCardStyle.card}
              style={{ opacity: isDone ? 0.15 : 1 }}>
            <Typography variant="body2">
                {props.class}
            </Typography>
            <CardContent>
                <Typography variant="h6">
                    {props.type.substring(0, 2)}{props.name}
                </Typography>
                <Typography variant="body2">
                    {props.endTime}
                </Typography>
            </CardContent>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
            }}>
                {isLoggedIn
                    ? <ToggleCompleteButton id={props.id} isDone={isDone}
                                            setIsDone={setIsDone}/>
                    : ''}
                <TaskModal id={props.id} commentCount={props.commentCount}/>
            </div>
        </Card>

    )
}
