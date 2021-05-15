import React from 'react';
import classes from "./Course.module.css";
import MeeGoNavbar from "../../Components/Navbar/Navbar";
import {Col, Container, Row} from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css'
import {faClock, faDollarSign, faStar, faUserFriends, faCalendarAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import InfoDisplay from "../../Components/UI/InfoDisplay/InfoDisplay";
import MeeGoButton from "../../Components/UI/Button/Button";
import SyllabusDisplay from "./SyllabusDisplay/SyllabusDisplay";

const Course = props => {
    const course = props.courseData
    const courseData = props.courseData.coursedata
    return (
        <div>
            <div className={classes.BgGradient}>
                <MeeGoNavbar />
                <Container>
                    <Row xs={1} md={3}>
                        <Col className={classes.CourseTag}>
                            <h2 className={classes.Title}>{course.title}</h2>
                        </Col>
                        <Col className={classes.CourseTag}>
                            <p className={classes.CategoryText} style={{color: '#f5f5f5'}}>{courseData.category}</p>
                        </Col>
                        <Col className={classes.CourseTag}>
                            <p className={classes.CategoryText} style={{color: '#f5f5f5'}}>{courseData.courses} Courses</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row xs={1} lg={2}>
                    <Col>
                        <img className={classes.Image + " py-5"} alt="random for now" src="https://source.unsplash.com/random/450x300" />
                    </Col>
                    <Col className="mb-xs-5 my-lg-5">
                        {/* TODO: REORDER THESE */}
                        <InfoDisplay icon={faClock}>50 minutes per class</InfoDisplay>
                        <InfoDisplay icon={faDollarSign}>{`${courseData.price} for ${courseData.courses} Courses`}</InfoDisplay>
                        <InfoDisplay icon={faUser}>{`Class Size: ${courseData.minSize}-${courseData.maxSize} Students`}</InfoDisplay>
                        <InfoDisplay icon={faStar}>{courseData.prerequisite}</InfoDisplay>
                        <InfoDisplay icon={faUserFriends}>{courseData.teacher}</InfoDisplay>
                        <InfoDisplay icon={faCalendarAlt}>{`Recommended ages: ${courseData.minAge}-${courseData.maxAge}`}</InfoDisplay>
                        <p className={classes.CategoryText + " mt-3 mb-4"}>
                            {courseData.description}
                        </p>
                        <MeeGoButton  style={{textAlign: 'start'}} path="/checkout" ReactLink color="yellow" >Enroll Now</MeeGoButton>
                    </Col>
                </Row>
                <Row>
                    <SyllabusDisplay items={courseData.syllabus} />
                </Row>
            </Container>
        </div>
    );
}


export default Course;
