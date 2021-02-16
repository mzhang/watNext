import TaskCard from './TaskCard.js'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TaskDeck() { 
  const [data, setData] = useState("Loading!");

  useEffect(() => {
    const getRes = async () => {
      const res = await axios.get('http://localhost:4000/task/getTasksDateFiltered')
      setData(res.data);
    }
    getRes();
  }, []);

  const GenerateDeck = () => {
    if (data === "Loading!") return "Loading!"
    else if (data?.tasks?.length) {
      
      return (data.tasks).map(e => <TaskCard 
      id={e._id} 
      key={e._id} 
      name={e.name} 
      type={e.type} 
      class={e.class} 
      endTime={new Date(e.endTime).toLocaleDateString("en-US")}
      commentCount={e.commentCount}
      isDone={e.isDone} />) }
    else return "The grind has stopped."
  }

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
