import { useState, useEffect } from 'react'
import axios from 'axios'

import CommentCard from './CommentCard'

export default function CommentDeck (props) {
  const [commentCardData, setCommentCardData] = useState(null)

  useEffect(() => {
    axios.get('/api/task/getComments/' + props.id)
      .then((res) => {
        setCommentCardData(res.data)
      })
  }, [props.id])

  const generateCommentDeck = () => {
    if (!commentCardData) {
      return 'Loading!'
    } else if (!commentCardData?.comment.length) {
      return <CommentCard user={'No comments here!'}
                          commentContent={'Maybe write one?'}/>
    } else if (commentCardData?.comment.length) {
      return commentCardData.comment.map(
        comment => <CommentCard user={comment.user}
                                commentContent={comment.commentContent}
                                key={comment._id}
        />)
    }
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: '5%',
    }}>
      {generateCommentDeck()}
    </div>
  )
}
