import React, {Component} from 'react';
import classes from "./Course.module.css";
import MeeGoNavbar from "../../Components/Navbar/Navbar";
import {Col, Container, Row} from "react-bootstrap";


class Course extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div className={classes.BgGradient}>
                    <MeeGoNavbar />
                    <Container>
                        <div style={{display: 'flex', alignContent: 'flex-start'}}>
                            <h2 className={classes.Title}>{this.props.courseData.title}</h2>
                            <p className={classes.CategoryText} style={{padding: '0 25px', color: '#f5f5f5'}}>{this.props.courseData.category}</p>
                            <p className={classes.CategoryText} style={{color: '#f5f5f5'}}>{this.props.courseData.courses} Courses</p>
                        </div>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <img className="p-5" alt="random for now" src="https://source.unsplash.com/random/450x300" />
                        </Col>
                        <Col>
                            <div className={classes.CategoryText + " my-5"}>
                                {this.props.courseData.description}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default Course;
