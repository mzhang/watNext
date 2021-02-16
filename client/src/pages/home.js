import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    useEffect(()=>{
        const getLoggedInStatus = async () => {
            const data = await axios.get("http://localhost:4000/user/authenticated")
            setIsLoggedIn(data.status != 401) 
        }
        getLoggedInStatus();
    }, [])
    return (
        <div>
            <h1>Home</h1>
            {isLoggedIn === null? null : <h2>You are {isLoggedIn ? "" : "not"} logged in!</h2>}
            
        </div>
    )
}