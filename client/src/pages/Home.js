import TaskDeck from '../components/tasks/TaskDeck'

export default function Home () {
  return (
    <>
      <TaskDeck style={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}/>
    </>
  )
}