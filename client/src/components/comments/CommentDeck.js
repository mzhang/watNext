import { useState, useEffect } from 'react'

import CommentCard from './CommentCard'
import { CircularProgress } from '@material-ui/core'; 

export default function CommentDeck (props) {
  

  const generateCommentDeck = () => {
    if (!props.commentCardData) {
      return <CircularProgress style={{marginTop:"15%"}}/>
    } else if (!props.commentCardData?.comment.length) {
      return <CommentCard user={'No comments here!'}
                          commentContent={'Maybe write one?'}/>
    } else if (props.commentCardData?.comment.length) {
      return props.commentCardData.comment.map(
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
