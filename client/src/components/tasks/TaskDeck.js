import TaskCard from './TaskCard.js'
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../AuthContext.js';
import { Container } from '@material-ui/core';

export default function TaskDeck() { 
  const [data, setData] = useState(null);
  const { isLoggedIn } = useContext(AuthContext)

  useEffect(() => {
    const getRes = async () => {
      const res = await axios.get('http://localhost:4000/task/' + 
      (isLoggedIn ? "getTasksDateFilteredWithMetadata" : "getTasksDateFiltered"))
      setData(res.data);
    }
    getRes();
  }, [isLoggedIn]);

  const GenerateDeck = () => {
    if (data === null) return "Loading!"
    else if (data?.tasks?.length) {
      // (data.tasks).forEach(e => {
      //   console.log(e.isDone, e.commentCount);
      // });
      
      return (data.tasks).map(e => <TaskCard 
      id={e._id} 
      key={e._id} 
      name={e.name} 
      type={e.type} 
      class={e.class} 
      endTime={new Intl.DateTimeFormat('default',{
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }).format(new Date(e.endTime))
      }
      commentCount={e.commentCount}
      isDone={e.isDone} />) }
    else return "The grind has stopped."
  }

  return (
    <Container style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent :"space-evenly",
      maxWidth: "900px"
    }}>
      <GenerateDeck />
    </Container>
  );
}
