import { Button, Form } from 'react-bootstrap';
import React, { Component } from 'react'
import './Signup.css';

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            Email: "",
            password: "",
            name: "",
            EmailError: "",
            passwordError: "",
            nameError: ""


        }
    }
    valid() {
        if (!this.state.Email.includes("@") && this.state.password.length < 5) {
            this.setState({
                EmailError: "Invalid Email", passwordError: "Password length should be more than 5"
            })
        }
        else if (!this.state.name.match(/^[a-zA-Z]+$/)) {
            this.setState({
                nameError: "Only Letters"
            })
        }
        else if (!this.state.name.includes("@")) {
            this.setState({
                EmailError: "Invalid Email"
            })
        }
        else if (this.state.password.length < 5) {
            this.setState({
                passwordError: "Password length should be more than 5"
            })
        }
        // else if(this.state.name.includes("@") && this.state.password.length < 5){
        //     this.setState({
        //         nameError: "", passwordError: ""
        //     })
        // }
        else {
            return true
        }
    }

    submit(e) {
        e.preventDefault()
        this.setState({
            EmailError: "", passwordError: ""
        })

        if (this.valid()) {
            alert("form has been submitted")
        }
    }
    render() {
        return (
            <div id="outerdiv">

                <div id="signupdiv">
                    <Form>
                        <h1 id="signuph1">Galleria!!</h1>
                        <h3 id="signuph3">Sign-Up</h3>
                        <Form.Group>
                            <Form.Label className="signuplabel">Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" className="signuptext" onChange={(event) => { this.setState({ name: event?.target.value }) }} />
                            <p style={{ color: "red", fontSize: "14px" }}>{this.state.nameError}</p>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="signuplabel">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" className="signuptext" onChange={(event) => { this.setState({ Email: event?.target.value }) }} />
                            <p style={{ color: "red", fontSize: "14px" }}>{this.state.EmailError}</p>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" >
                            <Form.Label className="signuplabel">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className="signuptext" onChange={(event) => { this.setState({ password: event?.target.value }) }} />
                            <p style={{ color: "red", fontSize: "14px" }}>{this.state.passwordError}</p>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className="signuplabel">Type of Art</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.File className="signuplabel" required name="file" label="Identity Proof" id="validationFormik107" feedbackTooltip />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="signupbutton" onClick={(e) => this.submit(e)} >
                            Submit
                        </Button>
                    </Form>
                </div>
            </div >
        )
    }
}
