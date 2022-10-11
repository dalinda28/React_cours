import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Example4 extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
        }
    }

    handleChange(event) { 
        this.setState({
            userName: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        alert('Bonjour: ' + this.state.userName)
    }

    render() {
        return (
            <div>
                <h2>Formulaire</h2>
                <Form onSubmit={(event) => this.handleSubmit(event)}>
                    <Form.Label>
                        <h3>{ this.state.userName }</h3>
                    </Form.Label>
                    <Form.Control type="text" value={ this.state.userName } onChange={(event) => this.handleChange(event)}/>
                    <br/>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}
export default Example4;

