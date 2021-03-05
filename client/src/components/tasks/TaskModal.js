import { useState } from 'react'
import { Dialog, IconButton } from '@material-ui/core'
import CommentDeck from '../comments/CommentDeck'
import CommentForm from '../comments/CommentForm'

export default function TaskModal (props) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {setIsOpen(true)}
  const handleClose = () => {setIsOpen(false)}
  return (
    <>
      <IconButton onClick={handleOpen} color="primary">
        {props.commentCount === 0 ? '🗨️' : '💬'}
      </IconButton>

      <Dialog open={isOpen} onClose={handleClose} scroll="body">
        <CommentDeck id={props.id}/>
        <CommentForm id={props.id}/>
      </Dialog>
    </>
  )
}