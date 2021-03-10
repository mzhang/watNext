import { memo, useState, useContext } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

import TaskModal from './TaskModal'
import ToggleCompleteButton from './ToggleCompleteButton'
import taskCardStyle from './TaskCard.module.css'
import { AuthContext } from '../../AuthContext.js'

function TaskCard (props) {
  const { isLoggedIn } = useContext(AuthContext)
  const getEmojiFrom = (str) => str.substring(0, 2)

  function hashCode (str) {
    // java String#hashCode
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 3) - hash)
    }
    return hash
  }

  function intToRGB (i) {
    const c = (i & 0x00ffffff).toString(16).toUpperCase()
    return '00000'.substring(0, 6 - c.length) + c
  }

  return (
    <Card
      className={taskCardStyle.card}
      style={{
        opacity: props.isDone ? 0.15 : 1,
        transition: 'opacity 1s',
        borderTop: '2px solid #' + intToRGB(hashCode(props.class)),
      }}
    >
      <Typography variant="body2">{props.class}</Typography>

      <CardContent>
        <Typography variant="h6">
          {getEmojiFrom(props.type)}
          {props.name}
        </Typography>
        <Typography variant="body2">{props.endTime}</Typography>
      </CardContent>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {isLoggedIn && (
          <ToggleCompleteButton
            id={props.id}
            isDone={props.isDone}
            setIsDone={(b) => {props.setIsDone(props.id, b)}}
          />
        )}

        <TaskModal id={props.id} commentCount={props.commentCount}/>
      </div>
    </Card>
  )
}

export default memo(TaskCard)
