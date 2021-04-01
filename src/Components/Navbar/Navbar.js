import React from 'react';
import {Navbar, Nav, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import classes from './Navbar.module.css'



const MeeGoNavbar = () => {
    const JoinStyle = ["d-lg-block", "d-none", "mx-2", classes.Button, classes.ButtonJoin]
    const LoginStyle = ["d-lg-block", "d-none", "mx-2", classes.Button, classes.ButtonLogin]
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" className="px-lg-5">
            <Navbar.Brand><Link to="/"><img alt="logo" src="/Navbar/logo.png" height="60"/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link className={classes.NavLink}>Courses</Link>
                    <Link className={classes.NavLink}>Blog</Link>
                    <Link className={classes.NavLink}>About</Link>
                    <Button className={JoinStyle.join(" ")}><Link style={{color: '#F5F5F5'}}>Join</Link></Button>
                    <Button className={LoginStyle.join(" ")}><Link style={{color: '#4691D9'}}>Login</Link></Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MeeGoNavbar;
