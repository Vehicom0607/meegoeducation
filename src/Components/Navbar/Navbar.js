import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import classes from './Navbar.module.css'
import MeeGoButton from "../Button/Button";
import {connect} from "react-redux";
import {useFirebase} from "react-redux-firebase";
import { useHistory } from "react-router-dom";

const MeeGoNavbar = props => {
    const JoinLoginStyleMobile = ["d-block", "d-lg-none", classes.NavLink]
    let history = useHistory()

    const firebase = useFirebase()
    const signOut = () => {
        firebase.logout()
            .then(() => {
                history.push("/")
                })
            .catch(err => console.log(err))
    }

    let buttons
    if (props.uuid) {
        buttons = <MeeGoButton style={{margin: '0px 10x'}} className={["d-none", "d-md-flex"]} color="yellow"  slim ReactLink path="/" onClick={() => signOut()} >Log Out</MeeGoButton>
    } else {
        buttons = (
            <React.Fragment>
                <MeeGoButton style={{margin: '0px 10px'}} className={["d-none", "d-md-flex"]} color="yellow" slim ReactLink path="/login">Join</MeeGoButton>
                <MeeGoButton style={{margin: '0px 10x'}} className={["d-none", "d-md-flex"]} color="white"  slim ReactLink path="/login">Login</MeeGoButton>
            </React.Fragment>
        )
    }

    return (
        <Navbar collapseOnSelect expand="lg" variant="light" className="px-lg-5">
            <Navbar.Brand><Link to="/"><img alt="logo" src="/Navbar/logo.png" height="60"/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link className={classes.NavLink} to="/courses">Courses</Link>
                    <Link className={classes.NavLink} to="/blog">Blog</Link>
                    <Link className={classes.NavLink} to="/about">About</Link>
                    <Link className={JoinLoginStyleMobile.join(" ")} to="/auth">Join</Link>
                    <Link className={JoinLoginStyleMobile.join(" ")} to="/auth">Login</Link>
                    {buttons}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const mapStateToProps = state => {
    return {
        uuid: state.auth.auth.uid
    }
}

export default connect(mapStateToProps)(MeeGoNavbar);
