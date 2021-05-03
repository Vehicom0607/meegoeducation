import React, {Component} from 'react';
import classes from "./Course.module.css";
import MeeGoNavbar from "../../Components/Navbar/Navbar";
import {Col, Container, Row} from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css'
import {faClock, faDollarSign, faStar, faUserFriends, faCalendarAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import InfoDisplay from "../../Components/InfoDisplay/InfoDisplay";
import MeeGoButton from "../../Components/Button/Button";

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
                    <Row xs={1} lg={2}>
                        <Col>
                            <img className={classes.Image + " py-5"} alt="random for now" src="https://source.unsplash.com/random/450x300" />
                        </Col>
                        <Col className="my-5">
                            {/* TODO: REORDER THESE */}
                            <InfoDisplay icon={faClock}>50 minutes per class</InfoDisplay>
                            <InfoDisplay icon={faDollarSign}>{`${courseData.price} for ${courseData.courses} Courses`}</InfoDisplay>
                            <InfoDisplay icon={faUser}>{`Class Size: ${courseData.minSize}-${courseData.maxSize} Students`}</InfoDisplay>
                            <InfoDisplay icon={faStar}>{courseData.prerequisite}</InfoDisplay>
                            <InfoDisplay icon={faUserFriends}>{courseData.teacher}</InfoDisplay>
                            <InfoDisplay icon={faCalendarAlt}>{`Recommended ages: ${courseData.minAge}-${courseData.maxAge}`}</InfoDisplay>
                            <p className={classes.CategoryText + " mt-3 mb-4"}>
                                {this.props.courseData.description}
                            </p>
                            <MeeGoButton ReactLink color="yellow" style={{textAlign: 'none'}} >Enroll Now</MeeGoButton>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default Course;
