import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ' '
        }
        //setting functions
        this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeEmployeeName(e) {
        this.setState({ name: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault()
        const employeeObject = {
            name: this.state.name

        }
        axios.post('http://localhost:4000/employee/', employeeObject)
            .then(res => console.log(res.data));
        this.setState({ name: '' })

    }



    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeEmployeeName} />
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
                        Create Employee
                    </Button>
                </Form>
            </div>);


    }
}