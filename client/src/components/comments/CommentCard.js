import { Card, CardContent, Typography } from '@material-ui/core'

import commentCardStyle from './CommentCard.module.css'

export default function CommentCard (props) {
  return (
    <Card className={commentCardStyle.card}>
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