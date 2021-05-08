import React from 'react';
import classes from './AuthStyles.module.css'
import MeeGoNavbar from "../../Components/Navbar/Navbar";
import {Button, Col, Container, Form} from "react-bootstrap";
import MeeGoCard from "../../Components/Card/Card";
import GoogleButton from "react-google-button";

const AuthPage = () => {
    return (
        <div>
            <div className={classes.BgGradient}>
                <MeeGoNavbar />
            </div>
            <div className="py-5">
                <Container>
                    <MeeGoCard className={classes.Card} >
                        <h4 className="text-center">
                            Sign Up / Log in
                        </h4>
                        <p className="text-center">Create an account and start learning today!</p>
                        <GoogleButton
                            style={{margin: 'auto'}}
                            type="light"
                            onClick={() => console.log("Login with google pressed")}
                        />
                        <p className="text-center my-2">or</p>
                        <Form>
                            <Form.Group>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control type="email" placeholder="Enter Password" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Control type="password" placeholder="Confirm Password" />
                                </Form.Group>
                            </Form.Row>
                            <Button onClick={() => console.log("Signup with google pressed")} block variant="primary" style={{color: '#f5f5f5f5'}}>Sign Up / Log In</Button>
                        </Form>
                    </MeeGoCard>
                </Container>
            </div>
        </div>
    );
};

export default AuthPage;
