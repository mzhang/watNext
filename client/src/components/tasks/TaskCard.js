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
        <Card style={{textAlign:"center", 
        opacity: isDone ? 0.15 : 1, 
        borderTop: "2px solid red", 
        width: "40%", maxWidth:"200px",
        marginTop: "5%"
        }}>
        <Typography variant="body2" component="p">
            {props.class}
        </Typography>
        <CardContent>
            <Typography variant="h6" component="h2">
                {props.type.substring(0,2)}{props.name}
            </Typography>
            <Typography variant="body2" component="p">
                {props.endTime}
            </Typography>
            <ToggleCompleteButton id={props.id} isDone={isDone} setIsDone={setIsDone}/>
            <TaskModal id={props.id}/> 
        </CardContent>
        </Card>
        
    )
}
