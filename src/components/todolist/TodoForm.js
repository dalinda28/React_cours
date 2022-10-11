import { Form, Button } from "react-bootstrap";
import { nanoid } from 'nanoid'

function TodoForm({ todo, setTodo, todoList, setTodoList }) {

    const handleChange = (event) => {
        setTodo(event.target.value);
    }
    const handleSumbit = (event) => {
        event.preventDefault();

        setTodoList([...todoList, { name: todo, id: nanoid() }])
        //todoList.push(todo);
        setTodo("");
    }

    return (
        <div className="container">
            <h2>Add Todo</h2>
            <Form onSubmit={handleSumbit}>
                <Form.Group>
                    <Form.Control type="text" onChange={handleChange} value={todo} />
                    <br />
                    <Button variant="primary" type="submit">Add</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default TodoForm;