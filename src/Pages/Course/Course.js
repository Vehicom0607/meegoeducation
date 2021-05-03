import React, {Component} from 'react';
import classes from "./Course.module.css";
import MeeGoNavbar from "../../Components/Navbar/Navbar";
import {Col, Container, Row} from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css'
import {faClock, faDollarSign, faStar, faUserFriends, faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import InfoDisplay from "../../Components/InfoDisplay/InfoDisplay";

class Course extends Component {
    render() {
        const course = this.props.courseData
        const courseData = this.props.courseData.coursedata
        return (
            <div>
                <div className={classes.BgGradient}>
                    <MeeGoNavbar />
                    <Container>
                        <div style={{display: 'flex', alignContent: 'flex-start'}}>
                            <h2 className={classes.Title}>{course.title}</h2>
                            <p className={classes.CategoryText} style={{padding: '0 25px', color: '#f5f5f5'}}>{courseData.category}</p>
                            <p className={classes.CategoryText} style={{color: '#f5f5f5'}}>{courseData.courses} Courses</p>
                        </div>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <img className="p-5" alt="random for now" src="https://source.unsplash.com/random/450x300" />
                        </Col>
                        <Col className="my-5">
                            <InfoDisplay icon={faClock}>50 minutes per class</InfoDisplay>
                            <InfoDisplay icon={faDollarSign}>{`${courseData.price} for ${courseData.courses} Courses`}</InfoDisplay>
                            <InfoDisplay icon={faStar}>{courseData.prerequisite}</InfoDisplay>
                            <InfoDisplay icon={faUserFriends}>{courseData.teacher}</InfoDisplay>
                            <InfoDisplay icon={faCalendarAlt}>{`Recommended ages: ${courseData.minAge}-${courseData.maxAge}`}</InfoDisplay>
                            <p className={classes.CategoryText + " my-5"}>
                                {this.props.courseData.description}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default Course;
