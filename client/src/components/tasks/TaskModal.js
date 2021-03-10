import { memo, useState } from 'react'
import { Dialog, IconButton } from '@material-ui/core'
import CommentDeck from '../comments/CommentDeck'
import CommentForm from '../comments/CommentForm'
import axios from 'axios'

function TaskModal (props) {
  const [isOpen, setIsOpen] = useState(false)

  const [commentCardData, setCommentCardData] = useState({ comment: [] })

  const getNewComments = () => {
    axios.get('/api/task/getComments/' + props.id)
      .then((res) => {
        setCommentCardData(res.data)
      })
  }

  const handleOpen = () => {
    setIsOpen(true)
    getNewComments()
  }

  const handleClose = () => {setIsOpen(false)}
  return (
    <>
      <IconButton onClick={handleOpen} color="primary">
        {props.commentCount || commentCardData.comment.length ? '💬' : '🗨️'}
      </IconButton>

      <Dialog open={isOpen} onClose={handleClose} scroll="body">
        <CommentDeck id={props.id} getNewComments={getNewComments}
                     commentCardData={commentCardData}/>
        <CommentForm id={props.id} getNewComments={getNewComments}
                     commentCardData={commentCardData}/>
      </Dialog>
    </>
  )
}

export default memo(TaskModal)