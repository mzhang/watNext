import TaskDeck from '../components/tasks/TaskDeck'

export default function Cards() { 
  
  return (
    <div style={{
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap"
    }}>
      <TaskDeck />
    </div>
  );
}
