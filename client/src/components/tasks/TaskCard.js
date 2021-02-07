import React from "react"
import {Card, CardActions, CardContent} from "@material-ui/core/"
import {Typography} from '@material-ui/core/';
import TaskModal from "./TaskModal"

export default function TaskCard(props) {
    console.log(props.id)
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
                <CardActions>
                    <TaskModal id={props.id}/>
                </CardActions>
            </CardContent>

        </Card>
        
    )
}