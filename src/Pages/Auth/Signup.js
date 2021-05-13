import React, {useState} from 'react';
import classes from './AuthStyles.module.css'
import MeeGoNavbar from "../../Components/Navbar/Navbar";
import {Button, Col, Container, Form} from "react-bootstrap";
import MeeGoCard from "../../Components/Card/Card";
import GoogleButton from "react-google-button";
import {useFirebase} from "react-redux-firebase";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

const AuthPage = props => {
    const firebase = useFirebase()
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const signInWithGoogle = () => {
        firebase.login({
            provider: 'google',
            type: 'popup'
        })
            .then(() => {
                history.push("/")
            })
    }

    const signInWithEmail = (email, password) => {

        try {
            firebase.login({
                email: email,
                password: password
            })
                .then(r => console.log(r))
        } catch {
             firebase.createUser({
                email: email,
                password: password
            })
                 .then(() => {})
        }

    }

    if (props.loggedIn) {
        history.push("/")
    }

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
                            onClick={() => signInWithGoogle()}
                        />
                        <p className="text-center my-2">or</p>
                        <Form>
                            <Form.Group>
                                <Form.Control value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Enter Password" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Control value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} type="password" placeholder="Confirm Password" />
                                </Form.Group>
                            </Form.Row>
                            <Button onClick={() => signInWithEmail(email, password)} block variant="primary" style={{color: '#f5f5f5f5'}}>Sign Up / Log In</Button>
                        </Form>
                    </MeeGoCard>
                </Container>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loggedIn: !!state.auth.auth.uid
    }
}

export default connect(mapStateToProps)(AuthPage);
