import { Component } from "react";
import { Button } from "react-bootstrap";

class Example3 extends Component {
    constructor() {
        super()
        this.state = {
            isToggle: true
        }
    }

    handleClick() {
        this.setState(state => ({
                isToggle: !this.state.isToggle
            })
        )
    }

    render() {
        return (
            <div>
                <h2>Le toggle !</h2>
                <p>{this.state.isToggle}</p>
                <Button variant="btn btn-info" onClick={() => this.handleClick()}>
                {this.state.isToggle ? 'On' : 'Off'}
                </Button>

            </div>
        )
    }
}
export default Example3;

