import { TaskCard } from './TaskCard.js'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TaskDeck() { 
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
