import { TaskCard } from '../components/taskCard.js'
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

  const GenerateDeck = () => data.filter(e => e.endTime*1000>currTime).sort((a, b) => a.endTime - b.endTime)
  .map(e => <TaskCard name={e.name} type={e.type} class={e.class} endTime={new Date(e.endTime).toLocaleDateString("en-US")} />)

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
