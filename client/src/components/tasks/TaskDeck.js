import TaskCard from './TaskCard.js'
import { useState, useEffect, useContext, useCallback } from 'react'
import axios from 'axios'
import { AuthContext } from '../../AuthContext.js'
import { Container, CircularProgress } from '@material-ui/core'

export default function TaskDeck () {
  const [tasks, setTasks] = useState([])
  const { isLoggedIn } = useContext(AuthContext)
  useEffect(() => {
    const getRes = async () => {
      const res = await axios.get('/api/task/' +
        (isLoggedIn
          ? 'getTasksDateFilteredWithMetadata'
          : 'getTasksDateFiltered'))
      res.data.tasks.forEach(
        task => task.endTimeObject = dateFormat.format(new Date(task.endTime)))
      setTasks(res.data.tasks)
    }
    getRes()
  }, [isLoggedIn])
  console.log(tasks)

  const setTaskIsDone = useCallback((taskID, isNewTaskDone) => {
    setTasks((tasks) => {
      const index = tasks.findIndex(task => task._id === taskID)
      const newTasks = [...tasks]
      newTasks[index] = Object.assign({},
        { ...newTasks[index], isDone: isNewTaskDone })
      return newTasks
    })
  }, [])

  const dateFormat = new Intl.DateTimeFormat('default', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })

  const generateTaskDeck = () => {
    if (tasks === null) {
      return <CircularProgress style={{ marginTop: '15%' }}/>
    } else if (!tasks?.length) {
      return 'The grind has stopped.'
    } else {
      return tasks.map(task =>
        <TaskCard
          id={task._id}
          key={task._id.toString()}
          name={task.name}
          type={task.type}
          class={task.class}
          endTime={task.endTimeObject}
          commentCount={task.commentCount}
          isDone={task.isDone}
          setIsDone={setTaskIsDone}
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
