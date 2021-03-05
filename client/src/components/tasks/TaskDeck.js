import TaskCard from './TaskCard.js'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../../AuthContext.js'
import { Container } from '@material-ui/core'

export default function TaskDeck () {
  const [data, setData] = useState(null)
  const { isLoggedIn } = useContext(AuthContext)

  useEffect(() => {
    const getRes = async () => {
      const res = await axios.get('/api/task/' +
        (isLoggedIn
          ? 'getTasksDateFilteredWithMetadata'
          : 'getTasksDateFiltered'))
      setData(res.data)
    }
    getRes()
  }, [isLoggedIn])

  const generateTaskDeck = () => {
    function createDateFormat () {
      return new Intl.DateTimeFormat('default', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })
    }

    if (data === null) {
      return 'Loading!'
    } else if (!data?.tasks?.length) {
      return 'The grind has stopped.'
    } else {
      return data.tasks.map(task =>
        <TaskCard
          id={task._id}
          key={task._id}
          name={task.name}
          type={task.type}
          class={task.class}
          endTime={createDateFormat().format(new Date(task.endTime))}
          commentCount={task.commentCount}
          isDone={task.isDone}/>)
    }
  }

  return (
    <Container style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      maxWidth: '900px',
    }}>
      {generateTaskDeck()}
    </Container>
  )
}
