import React from "react"
import Card from "react-bootstrap/Card"

export function TaskCard(props) {
    return (
        <Card style={{ width: '18rem'}} className="text-center">
            <Card.Title><h1>{props.name}</h1></Card.Title>
            <Card.Body>
                <Card.Text>
                    <p>{props.type}</p>
                    <p>{props.class}</p>
                    <p>{props.endTime}</p>
                </Card.Text>
            </Card.Body>
        </Card>
        
    )
}