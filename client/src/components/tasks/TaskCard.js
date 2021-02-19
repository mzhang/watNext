import React, { useState } from "react";
import {Card, CardActions, CardContent} from "@material-ui/core/"
import {Typography} from '@material-ui/core/';
import TaskModal from "./TaskModal"
import ToggleCompleteButton from "./ToggleCompleteButton"
import taskCardStyle from "./TaskCard.module.css"

export default function TaskCard(props) {
    // const [ opacity, setOpacity ] = useState(props.isDone ? 0.15 : 1);
    const [isDone, setIsDone] = useState(props.isDone);

    // useEffect(() => {
    //     setOpacity(props.isDone ? 0.15 : 1) 
    // },[props.isDone]);

    return (
        <Card className={taskCardStyle.card} style={{opacity: isDone ? 0.15 : 1}}>
        <Typography variant="body2">
            {props.class}
        </Typography>
        <CardContent className={taskCardStyle.cardContent}>
            <Typography >
                {props.type.substring(0,2)}{props.name}
            </Typography>
            <Typography variant="body2" component="p">
                {props.endTime}
            </Typography>
        </CardContent>
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            <ToggleCompleteButton id={props.id} isDone={isDone} setIsDone={setIsDone}/>
            <TaskModal id={props.id} commentCount={props.commentCount}/>  
        </div>
        </Card>
        
    )
}
