import React, {Component} from 'react';
import MeeGoNavbar from "../../Components/Navbar/Navbar";
import classes from './Admin.module.css'
import {Form, Col, Container} from "react-bootstrap";
import MeeGoButton from "../../Components/UI/Button/Button";

class AdminPage extends Component {

    state = {
        name: "",
        shortDescription: "",
        description: "",
        category: "",
        path: "",
        imgLink: "",
        maxSize: "",
        minAge: "",
        maxAge: "",
        prerequisite: "",
        price: "",
        courses: "",
        teacher: ""
    }

    render() {
        return (
            <div>
                <div className={classes.BgGradient}>
                    <MeeGoNavbar/>
                </div>
                <Container>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                        </Form.Row>

                        <MeeGoButton color="gradient" ReactLink to={"/admin"}>
                            Submit
                        </MeeGoButton>
                    </Form>
                </Container>
            </div>
        );
    }
}



export default AdminPage;
