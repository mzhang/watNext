import React from 'react';
import LogoutButton from "../components/logoutButton"
import LoginForm from "../components/loginForm"

export default function Home() {
    return (
        <div style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap"
          }}>
            <LogoutButton />
            <LoginForm />
            <h1>Test page!</h1>
        </div>
    )
}