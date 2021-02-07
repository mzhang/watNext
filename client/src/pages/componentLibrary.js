import React from 'react';
import LogoutButton from "../components/LogoutButton"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"
import CommentCard from "../components/comments/CommentCard"
import CommentForm from "../components/comments/CommentForm"
import IsAuthenticatedButton from "../components/IsAuthenticatedButton"

export default function Home() {
    return (
        <div style={{
            backgroundColor: "lightgrey"
          }}>
            <LogoutButton />
            <LoginForm />
            <RegisterForm />
            <CommentForm id={"60090777d3ec910dd87215e0"}/>
            <CommentCard user={"user"} commentContent={"commentContent"} />
            <IsAuthenticatedButton />
        </div>
    )
}