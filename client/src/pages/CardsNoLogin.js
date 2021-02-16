import TaskDeckNoLogin from '../components/tasks/TaskDeckNoLogin'

export default function Cards() { 
  
  return (
    <div style={{
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap"
    }}>
      <TaskDeckNoLogin />
    </div>
  );
}
