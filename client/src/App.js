import './App.css';
import { TaskCard } from './components/taskCard.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() { 
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRes = async () => {
      const res = await axios({
      method: 'get',
      url: 'http://localhost:4000/1b'
    })
    setData(res.data);
    }
    getRes();
  }, []);

  const currTime = new Date().getTime() * 1000

  const GenerateDeck = () => data.sort((a, b) => a.endTime - b.endTime).filter(e => e.endTime*1000>currTime)
  .map(e => <TaskCard name={e.name} type={e.type} class={e.class} endTime={new Date(e.endTime).toLocaleDateString("en-US")} />)

  return (
    <div style={{
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "teal",
      width: "90%",
      flexWrap: "wrap"
    }}>
      <GenerateDeck />
    </div>
  );
}

export default App;
