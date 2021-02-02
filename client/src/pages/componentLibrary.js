import React from 'react';
import LogoutButton from "../components/LogoutButton"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"

export default function Home() {
    return (
        <div style={{
            backgroundColor: "lightgrey"
          }}>
            <LogoutButton />
            <LoginForm />
            <RegisterForm />
            <h1>Test page!</h1>
        </div>
    )
}