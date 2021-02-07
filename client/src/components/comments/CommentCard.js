import React from "react"
import Card from "react-bootstrap/Card"
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function CommentCard(props) {
    return (
        <Card style={{ width: '18rem', 
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexWrap: "wrap"
          }}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.user}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.commentContent}
                </Typography>
            </CardContent>

        </Card>
        
    )
}