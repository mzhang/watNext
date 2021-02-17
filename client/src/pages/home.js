import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import LogoutButton from "../components/login/LogoutButton"
import LoginForm from "../components/login/LoginForm"

export default function Home() {
    const {user, isLoggedIn} = useContext(AuthContext);
    return (
        <div>
            <h1>Home</h1>
            {user === null ? null : <h2>{user ? `Hey ${user.username}! `:"" }You are {isLoggedIn ? "" : "not"} logged in!</h2>}
            <LogoutButton />
            <LoginForm />
            
        </div>
    )
}