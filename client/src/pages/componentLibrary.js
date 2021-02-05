import React from 'react';
import LogoutButton from "../components/LogoutButton"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"
import TaskModal from "../components/TaskModal"
import CommentCard from "../components/CommentCard"

export default function Home() {
    return (
        <div style={{
            backgroundColor: "lightgrey"
          }}>
            <LogoutButton />
            <LoginForm />
            <RegisterForm />
            <TaskModal id={"60090777d3ec910dd872161a"} />
            <CommentCard user={"Matt"} commentContent={"Hello"} />
        </div>
    )
}