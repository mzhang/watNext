import React from 'react';
import LogoutButton from "../components/login/LogoutButton"
import LoginForm from "../components/login/LoginForm"
import RegisterForm from "../components/login/RegisterForm"
import CommentCard from "../components/comments/CommentCard"
import CommentForm from "../components/comments/CommentForm"
import IsAuthenticatedButton from "../components/login/IsAuthenticatedButton"
import ToggleCompleteButton from "../components/tasks/ToggleCompleteButton"

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
            <ToggleCompleteButton isDone={true} id={"60090777d3ec910dd87215e0"}/>
        </div>
    )
}