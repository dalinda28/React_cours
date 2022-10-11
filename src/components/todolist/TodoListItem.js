import React from 'react'
import Button from 'react-bootstrap/Button'

const itemStyle = {
    backgroundColor: "#dddddd",
    borderRadius: "15px",
    padding: "0.7em",
    marginTop: "10px"
}

const itemNameStyle = {
    textAlign: "#center",
    color: "black"
}

function TodoListItem({ listItem, todoList, setTodoList }) {

    const handleDelete = () => {
        setTodoList(todoList.filter((item) => item.id !== listItem.id));
    }
    return (
        <div style={itemStyle}>
            <h5 style={itemNameStyle}>{listItem.name}</h5>
            <Button variant="danger" onClick={handleDelete}>Done</Button>
        </div>
    )
}

export default TodoListItem