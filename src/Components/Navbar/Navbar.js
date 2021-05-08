import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import classes from './Navbar.module.css'
import MeeGoButton from "../Button/Button";



const MeeGoNavbar = () => {
    const JoinLoginStyleMobile = ["d-block", "d-lg-none", classes.NavLink]
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
                    <MeeGoButton style={{margin: '0px 10px'}} className={["d-none", "d-md-flex"]} color="yellow" slim ReactLink path="/login">Join</MeeGoButton>
                    <MeeGoButton style={{margin: '0px 10x'}} className={["d-none", "d-md-flex"]} color="white"  slim ReactLink path="/login">Login</MeeGoButton>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MeeGoNavbar;
