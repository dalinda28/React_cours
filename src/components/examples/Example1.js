import { Component } from "react";
import { Button } from "react-bootstrap";

class Example1 extends Component {
    constructor() {
        super()
        this.state = {
            compteur: 0,
        }
    }
    
    increment() {
        this.setState({
            compteur: this.state.compteur + 1
        })
    }

    noincrmeent() {
        this.setState({
            compteur: this.state.compteur - 1
        })
    }
    render() {
        return (
            <div>
                <h2>Compteur</h2>
                <p>{ this.state.compteur }</p>
                <Button variant="btn btn-info" onClick={ () => this.increment() }> ++ </Button>
                <Button variant="btn btn-info" onClick={ () => this.noincrmeent() }> -- </Button>
            </div>
        )
    }
}
export default Example1;

