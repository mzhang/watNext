import './App.css';
import { TaskCard } from './components/taskCard.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() { 
  const [data, setData] = useState();

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

  

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      <TaskCard name="name" type="type" class="class" endTime="endTime" />
    </div>
  );
}

export default App;
