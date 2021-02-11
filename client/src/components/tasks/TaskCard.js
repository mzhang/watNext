import React, { useState } from "react";
import {Card, CardActions, CardContent} from "@material-ui/core/"
import {Typography} from '@material-ui/core/';
import TaskModal from "./TaskModal"
import ToggleCompleteButton from "./ToggleCompleteButton"

export default function TaskCard(props) {
    const [ commentCount, setCommentCount ] = useState(0);
    const [ isDone, setIsDone ] = useState(false);
    return (
        <Card style={{ width: '18rem', height:'20rem',
            // display: "inline-flex",
            // justifyContent: "center",
            // alignItems: "center",
            // textAlign: "center",
            // flexWrap: "wrap"
          }}>
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
                    {commentCount} comments so far!
                </Typography>
                <CardActions>
                    <TaskModal id={props.id}/>
                    <ToggleCompleteButton id={props.id} isDone={isDone}/>
                </CardActions>
            </CardContent>

        </Card>
        
    )
}
