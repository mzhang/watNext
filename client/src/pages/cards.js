import TaskDeck from '../components/TaskDeck'

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
