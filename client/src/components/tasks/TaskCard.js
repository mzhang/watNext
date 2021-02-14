import React, { useState } from "react";
import {Card, CardActions, CardContent} from "@material-ui/core/"
import {Typography} from '@material-ui/core/';
import TaskModal from "./TaskModal"
import ToggleCompleteButton from "./ToggleCompleteButton"

export default function TaskCard(props) {
    // const [ opacity, setOpacity ] = useState(props.isDone ? 0.15 : 1);
    const [isDone, setIsDone] = useState(props.isDone);

    // useEffect(() => {
    //     setOpacity(props.isDone ? 0.15 : 1) 
    // },[props.isDone]);

    return (
        <Card style={{width: '18rem', height:'20rem', opacity: isDone ? 0.15 : 1}}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.name}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.class}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.type}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.endTime}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.commentCount} comments so far!
                    <br />
                    {props.isDone ? "You've already finished this!" : "Get this done!"}
                </Typography>
                <CardActions>
                    <TaskModal id={props.id}/>
                    <ToggleCompleteButton id={props.id} isDone={isDone} setIsDone={setIsDone}/>
                </CardActions>
            </CardContent>

        </Card>
        
    )
}
