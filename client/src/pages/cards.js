import { TaskCard } from '../components/TaskCard.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() { 
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRes = async () => {
      const res = await axios({
      method: 'get',
      url: 'http://localhost:4000/task/getTasksDateFiltered'
    })
    setData(res.data);
    }
    getRes();
  }, []);

  const GenerateDeck = () => data.tasks ? (data.tasks).map(e => <TaskCard id={e._id} name={e.name} type={e.type} class={e.class} endTime={new Date(e.endTime).toLocaleDateString("en-US")} />) : "No tasks found!"

  return (
    <div style={{
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap"
    }}>
      <GenerateDeck />
    </div>
  );
}

export default App;
