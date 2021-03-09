import { useRef } from 'react'
import { IconButton } from '@material-ui/core'
import axios from 'axios'
import Reward from 'react-rewards'

export default function ToggleComplete (props) {
  const rewardElement = useRef(null)

  const markAsDone = () => {
    axios.post('/api/task/markAsDone/' + props.id).then(() => {
      rewardElement.current.rewardMe()
      props.setIsDone(true)
    })
  }

  const markAsUndone = () => {
    axios.post('/api/task/markAsUndone/' + props.id).then(() => {
      props.setIsDone(false)
    })
  }

  return (
    <Reward
      ref={rewardElement}
      type={'confetti'}
      config={{
        "springAnimation" : false
      }}
    >
      <IconButton
        color="primary"
        onClick={props.isDone
          ? () => { markAsUndone() }
          : () => { markAsDone() }}
      >
        🎉
      </IconButton>
    </Reward>
  )
}