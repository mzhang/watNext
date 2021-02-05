import CommentCard from '../components/CommentCard'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CardDeck(props) { 
  const [data, setData] = useState({});

  useEffect(()=>{
      axios.get("http://localhost:4000/task/getComments/"+props.id)
    .then((data) => {console.log(data);setData(data)})
    .catch((err) => setData(err))
  },[])


  const GenerateDeck = () => data?.data?.comment ? (data.data.comment).map(e => 
  <CommentCard user={e.user} commentContent={e.commentContent}/>) : "No comments yet! Maybe write one?"

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
