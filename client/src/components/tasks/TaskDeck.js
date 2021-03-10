import TaskCard from './TaskCard.js'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../../AuthContext.js'
import { Container, CircularProgress } from '@material-ui/core'

export default function TaskDeck () {
  const [tasks, setTasks] = useState(null)
  const { isLoggedIn } = useContext(AuthContext)

  useEffect(() => {
    const getRes = async () => {
      const res = await axios.get('/api/task/' +
        (isLoggedIn
          ? 'getTasksDateFilteredWithMetadata'
          : 'getTasksDateFiltered'))
      setTasks(res.data.tasks)
    }
    getRes()
  }, [isLoggedIn])

  const setTaskIsDone = (taskID) => (isNewTaskDone) => {
    const index = tasks.findIndex(task => task._id == taskID)
    const temp = [...tasks]
    // Object.assign(temp[index], {isDone : isNewTaskDone})
    temp[index].isDone = isNewTaskDone
    setTasks(temp)
  }
  
  function createDateFormat () {
    return new Intl.DateTimeFormat('default', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })
  }

  const generateTaskDeck = () => {
    if (tasks === null) {
      return <CircularProgress style={{marginTop:"15%"}}/>
    } else if (!tasks?.length) {
      return 'The grind has stopped.'
    } else {
      return tasks.map(task => 
        <TaskCard
          id={task._id}
          key={task._id}
          name={task.name}
          type={task.type}
          class={task.class}
          endTime={createDateFormat().format(new Date(task.endTime))}
          commentCount={task.commentCount}
          isDone={task.isDone}
          setIsDone={setTaskIsDone(task._id)}
          />)
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
