import React, {Component} from 'react';
import MeeGoNavbar from "../../Components/Navbar/Navbar";
import classes from './index.module.css'
import {Col, Container, Image, Row} from "react-bootstrap";
import IndexCarousel from "./Carousel/Carousel";
import MeeGoButton from "../../Components/Button/Button";
import * as actions from '../../store/actions'
import {connect} from "react-redux";

class IndexPage extends Component {

    componentDidMount() {
        document.title = "MeeGo Education"
        this.props.getCourses()
    }


    render() {
        return (
            <div>
                <div className={classes.BgGradient}>
                    <MeeGoNavbar />
                    <Container>
                        <Row  md="2" xs="1">
                            <Col>
                                <p className="text-white display-4 text-left font-weight-bold">Learn Together,</p>
                                <p className="text-white display-4 text-left font-weight-bold">Grow Together.</p>
                                <p className="text-white text-left">Enrichment courses with engaging teachers for a stimulating learning experience.</p>
                                <span style={{display:"flex", justifyContent:"flex-start", width:"100%", padding:"0"}}>
                                <MeeGoButton path="/courses" ReactLink color="yellow">VIEW COURSES</MeeGoButton>
                                </span>
                            </Col>
                            <Col>
                                <Image className={classes.HeaderImage} alt="Man holding something idk" src="/Index/header1.png"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="my-5">
                    <IndexCarousel courses={this.props.courses.courseData} />
                    <section className="my-5">
                        <h2 style={{color: '#707070'}}>Free Courses</h2>
                        <div className={classes.Card + " " + classes.BgWhite}>
                            <Row xs="1" md="2">
                                <Col className={classes.FreeCourseCol}>
                                    <Image className={classes.CourseImage} src="./Index/Temp/math2.png" />
                                    <div className="text-left m-2">
                                        <p className={classes.CourseTitle}>Math Beast Academy</p>
                                        <p className={classes.CourseDescription}>An engaging comic-book style: Illustrated Guide Books. Engaging Practice. Comprehensive Curriculum.</p>
                                        <span style={{display:"flex", justifyContent:"flex-start", width:"100%", padding:"0"}}>
                                            <MeeGoButton path="/courses"  ml ReactLink color="gradient">TRY FOR FREE</MeeGoButton>
                                        </span>
                                    </div>
                                </Col>
                                <Col className={classes.FreeCourseCol}>
                                    <Image className={classes.CourseImage} src="./Index/Temp/writing2.png" />
                                    <div className="text-left m-2">
                                        <p className={classes.CourseTitle}>Creative Writing</p>
                                        <p className={classes.CourseDescription}>Designed to give students an opportunity to release their inner author and explore the creative art of storytelling.</p>
                                        <span style={{display:"flex", justifyContent:"flex-start", width:"100%", padding:"0"}}>
                                            <MeeGoButton path="/courses"  ml ReactLink color="gradient">TRY FOR FREE</MeeGoButton>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            <Row xs="1" md="2">
                                <Col className={classes.FreeCourseCol}>
                                    <Image className={classes.CourseImage} src="./Index/Temp/art2.png" />
                                    <div className="text-left m-2">
                                        <p className={classes.CourseTitle}>Art 1</p>
                                        <p className={classes.CourseDescription}>Children can learn code to create online projects using a block-like interface. It's fun.</p>
                                        <span style={{display:"flex", justifyContent:"flex-start", width:"100%", padding:"0"}}>
                                            <MeeGoButton path="/courses"  ml ReactLink color="gradient">TRY FOR FREE</MeeGoButton>
                                        </span>
                                    </div>
                                </Col>
                                <Col className={classes.FreeCourseCol}>
                                    <Image className={classes.CourseImage} src="./Index/Temp/scratch2.png" />
                                    <div className="text-left m-2">
                                        <p className={classes.CourseTitle}>Scratch 1</p>
                                        <p className={classes.CourseDescription}>Children can learn code to create online projects using a block-like interface. It's fun.</p>
                                        <span style={{display:"flex", justifyContent:"flex-start", width:"100%", padding:"0"}}>
                                            <MeeGoButton path="/courses"  ml ReactLink color="gradient">TRY FOR FREE</MeeGoButton>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </section>
                    <div className={classes.Card + " " + classes.BgGradient + " " + classes.RegisterPadding}>
                        <Row xs="1" md="2">
                            <Col className="text-left text-white">
                                <h2>Register Today!</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt eleifend eros et pulvinar. Morbi ante quam, consectetur malesuada dapibus ac, cursus eget erat. Proin eget sapien hendrerit, posuere dui ut, efficitur lacus. Maecenas magna dolor, facilisis eu ullamcorper sit amet, fermentum id lacus. Fusce eget egestas mi.</p>
                            </Col>
                            <Col style={{display: 'flex', justifyContent: 'space-evenly'}}>
                                <span style={{alignSelf: 'center'}}>
                                    <MeeGoButton path="/courses" ml ReactLink color="yellow">VIEW COURSE</MeeGoButton>
                                </span>
                                <span style={{alignSelf: 'center'}}>
                                    <MeeGoButton path="/courses" ml ReactLink color="red">CONTACT US</MeeGoButton>
                                </span>
                            </Col>
                        </Row>
                    </div>
                    <section className="py-5">
                        <Row xs="1" md="2">
                            <Col md="12" lg="4">
                                <div className={classes.VarietyCourses}>
                                    <div style={{padding: '0 20px'}} className="text-left">
                                        <h2 className={classes.Text}>A Variety of Courses</h2>
                                        <p style={{paddingBottom: '10px'}} className={classes.CourseDescription}>Meego partners with experienced teachers to offer a wide range of live online classes, in English, mathematics, and computer science.  We also offer “lifestyle” courses in cooking, singing, and physical education.
                                            <br/><br/>
                                            We can’t wait to have you join us!
                                        </p>
                                        <MeeGoButton ReactLink path="/courses" color="yellow" >VIEW COURSES</MeeGoButton>
                                    </div>
                                </div>
                            </Col>
                            <Col md="12" lg="8" >
                                <div className={classes.CourseSectionBigSection}>
                                    <div className={classes.CourseSection}>
                                        <div className={classes.CourseSectionSection}>
                                            <img style={{marginRight: '10px'}} height="60" width="60" alt="light bulb" src="./Index/Temp/icon-1-blue@2x.png" />
                                            <div style={{paddingTop: '10px'}}>
                                                <p className={classes.CourseTitle}>English</p>
                                                <p>Early Writing</p>
                                                <p>Wordly Wise 3000</p>
                                                <p>Creative Writing</p>
                                                <p>Literature Writing</p>
                                                <p>Specific Writing Topic</p>
                                                <p>Reading + Essay Writing</p>
                                                <p>Public speaking</p>
                                                <p>Debate</p>
                                            </div>
                                        </div>
                                        <div className={classes.CourseSectionSection}>
                                            <img style={{marginRight: '10px'}} height="60" width="60" alt="light bulb" src="./Index/Temp/tutor-icon-9-blue@2x.png" />
                                            <div style={{paddingTop: '10px'}}>
                                                <p className={classes.CourseTitle}>Math</p>
                                                <p>Beast Academy</p>
                                                <p>Beast Academy II</p>
                                                <p>School Math</p>
                                                <p>Math Competition</p>
                                                <p>Chemistry</p>
                                                <p>Physics</p>
                                            </div>
                                        </div>
                                        <div className={classes.CourseSectionSection}>
                                            <img style={{marginRight: '10px'}} height="60" width="60" alt="light bulb" src="./Index/Temp/icon-8-blue@2x.png" />
                                            <div style={{paddingTop: '10px'}}>
                                                <p className={classes.CourseTitle}>Life Style</p>
                                                <p>Fitness | Yoga</p>
                                                <p>Chess</p>
                                                <p>Photography</p>
                                                <p>Singing</p>
                                                <p>Cooking|Baking</p>
                                            </div>
                                        </div>
                                        <div className={classes.CourseSectionSection}>
                                            <img style={{marginRight: '10px'}} height="60" width="60" alt="light bulb" src="./Index/Temp/icon-5-blue@2x.png" />
                                            <div style={{paddingTop: '10px'}}>
                                                <p className={classes.CourseTitle}>Coding & Tech</p>
                                                <p>Scratch</p>
                                                <p>Python</p>
                                                <p>Artificial Intelligence</p>
                                                <p>Java</p>
                                                <p>USACO</p>
                                                <p>Animation</p>
                                                <p>Game Design</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{textAlign: 'left'}}>
                                        <div className={classes.CourseSectionSection}>
                                            <img style={{marginRight: '10px'}} height="60" width="60" alt="light bulb" src="./Index/Temp/icon-5-blue@2x.png" />
                                            <div style={{paddingTop: '10px'}}>
                                                <p className={classes.CourseTitle}>Coding & Tech</p>
                                                <p>Scratch</p>
                                                <p>Python</p>
                                                <p>Artificial Intelligence</p>
                                                <p>Java</p>
                                                <p>USACO</p>
                                                <p>Animation</p>
                                                <p>Game Design</p>
                                                <p>Legos</p>
                                            </div>
                                        </div>
                                        <div className={classes.CourseSectionSection}>
                                            <img style={{marginRight: '10px'}} height="60" width="60" alt="light bulb" src="./Index/Temp/icon-6-blue@2x.png" />
                                            <div style={{paddingTop: '10px'}}>
                                                <p className={classes.CourseTitle}>Art</p>
                                                <p>Illustrator</p>
                                                <p>Comics</p>
                                                <p>Fun Ink Painting</p>
                                                <p>Portrait Drawing</p>
                                                <p>Line Drawing</p>
                                                <p>Coloring</p>
                                                <p>Sketching</p>
                                                <p>Video Editing</p>
                                            </div>
                                        </div>
                                        <div className={classes.CourseSectionSection + " text-left"}>
                                            <img style={{marginRight: '10px'}} height="60" width="60" alt="light bulb" src="./Index/Temp/icon-10-blue@2x.png" />
                                            <div style={{paddingTop: '10px'}}>
                                                <p className={classes.CourseTitle}>Coding & Tech</p>
                                                <p>Stocks and investments</p>
                                                <p>Wharton Business Competition</p>
                                                <p>Youth MBA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section className={classes.GetStarted}>
                        <div>
                            <h2 style={{color: '#FFCC57'}}>Ready To Get Started?</h2>
                            <p style={{color: '#707070'}}>Create an account and try a <b>FREE</b> course</p>
                        </div>
                        <div className={classes.TwoButtons}>
                            <MeeGoButton ReactLink color="gradient" path="/courses">TRY FOR FREE</MeeGoButton>
                            <MeeGoButton ReactLink color="red" path="/contact">CONTACT US</MeeGoButton>
                        </div>
                    </section>
                </Container>
                <footer className={classes.Footer}>
                    <Row style={{margin: 0}}>
                        <Col>
                            <p>Contact Us</p>
                        </Col>
                        <Col>
                            <p>idk i'll add stuff later</p>
                        </Col>
                    </Row>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        getCourses: () => dispatch(actions.getCourses())
    }
}


export default connect(mapStateToProps, mapDispatchtoProps)(IndexPage);
