import React from "react"
import Card from "react-bootstrap/Card"

export function TaskCard(props) {
    return (
        <Card style={{ width: '18rem', height:'20rem',
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexWrap: "wrap"
          }}>
            <div>
                <Card.Title><h4>{props.name}</h4></Card.Title>
                <Card.Body>
                    <Card.Text>
                        <p>{props.type}</p>
                        <p>{props.class}</p>
                        <p>{props.endTime}</p>
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>
        
    )
}