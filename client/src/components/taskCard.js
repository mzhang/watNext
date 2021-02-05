import React from "react"
import Card from "react-bootstrap/Card"
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export function TaskCard(props) {
    console.log(props.id)
    return (
        <Card style={{ width: '18rem', height:'20rem',
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexWrap: "wrap"
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
            </CardContent>

        </Card>
        
    )
}