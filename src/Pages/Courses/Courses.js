import React, {Component} from 'react';
import classes from "./Courses.module.css";
import MeeGoNavbar from "../../Components/Navbar/Navbar";
import {Container} from "react-bootstrap";
import CoursesCourseCard from "./CoursesCourseCard/CourseCard";


class CoursesPage extends Component {

    componentDidMount() {
        document.title = "MeeGo Education | Courses"
    }

    render() {
        //TODO CHANGE CoursesCourseCard TO USE FIREBASE INSTEAD OF HARD CODED
        return (
            <div>
                <div className={classes.BgGradient}>
                    <MeeGoNavbar />
                    <Container className={classes.ExtraPadding}>
                        <h1 className={classes.HeaderTitle}>Our Courses</h1>
                        <p className={classes.HeaderText}>Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis  iumenjor emensis venit Petobionem oppidum Noricorum.</p>
                        <div style={{position: 'relative'}}>
                            <div style={{position: 'absolute'}}>
                                <CoursesCourseCard course={'English'} description={"Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis  iumenjor emensis venit Petobionem oppidum Noricorum."} numCourses={9} />
                                <CoursesCourseCard course={'English'} description={"Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis  iumenjor emensis venit Petobionem oppidum Noricorum."} numCourses={9} />
                                <CoursesCourseCard course={'English'} description={"Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis  iumenjor emensis venit Petobionem oppidum Noricorum."} numCourses={9} />
                                <CoursesCourseCard course={'English'} description={"Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis  iumenjor emensis venit Petobionem oppidum Noricorum."} numCourses={9} />
                                <CoursesCourseCard course={'English'} description={"Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis  iumenjor emensis venit Petobionem oppidum Noricorum."} numCourses={9} />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}


export default CoursesPage;
