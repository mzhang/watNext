import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import LogoutButton from "../components/login/LogoutButton"
import LoginForm from "../components/login/LoginForm"
import TaskDeck from '../components/tasks/TaskDeck'

export default function Home() {
    const {user, isLoggedIn} = useContext(AuthContext);
    return (
        <>
            {/* <h1>Home</h1>
            {user === null ? null : <h2>{user ? `Hey ${user.username}! `:"" }You are {isLoggedIn ? "" : "not"} logged in!</h2>}
            <LogoutButton /> */}
            <LoginForm />
            <TaskDeck style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap"
            }}/>

        </>
    )
}