import React, {useState} from 'react';
import MeeGoNavbar from "../../Components/Navbar/Navbar";
import classes from './Admin.module.css'
import {Form, Col, Container} from "react-bootstrap";
import MeeGoButton from "../../Components/UI/Button/Button";

const AdminPage = props => {
    const [name, changeName] = useState("")
    const [shortDescription, changeShortDescription] = useState("")
    const [description, changeDescription] = useState("")
    const [imgLink, changeImgLink] = useState("")
    const [maxSize, changeMaxSize] = useState("")
    const [minAge, changeMinAge] = useState("")
    const [maxAge, changeMaxAge] = useState("")
    const [prerequisite, changePrerequisite] = useState("None")
    const [price, changePrice] = useState("100")
    const [courses, changeCourses] = useState("10")
    const [teacher, changeTeacher] = useState("")
    const [category, changeCategory] = useState("")
    const [path, changePath] = useState("")


    return (
        <div>
            <div className={classes.BgGradient}>
                <MeeGoNavbar/>
            </div>
            <Container>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(event) => changeName(event.target.value)} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Short Description(100 chars)</Form.Label>
                            <Form.Control type="text" value={shortDescription} onChange={(event) => {if (event.target.value.length<=100) {changeShortDescription(event.target.value)}}} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" value={description} onChange={(event) => changeDescription(event.target.value)} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Image Link</Form.Label>
                            <Form.Control type="text" value={imgLink} onChange={(event) => changeImgLink(event.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Max Size</Form.Label>
                            <Form.Control type="text" value={maxSize} onChange={(event) => changeMaxSize(event.target.value)} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Minimum Recommended Age</Form.Label>
                            <Form.Control type="text" value={minAge} onChange={(event) => changeMinAge(event.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Maximum Recommended Age</Form.Label>
                            <Form.Control type="text" value={maxAge} onChange={(event) => changeMaxAge(event.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Prerequisite(Enter None if none)</Form.Label>
                            <Form.Control type="text"  value={prerequisite} onChange={(event) => changePrerequisite(event.target.value)} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" value={price} onChange={(event) => changePrice(event.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Number of Courses</Form.Label>
                            <Form.Control type="text" value={courses} onChange={(event) => changeCourses(event.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Teacher Name</Form.Label>
                            <Form.Control type="text"  value={teacher} onChange={(event) => changeTeacher(event.target.value)} />
                        </Form.Group>
                    </Form.Row>



                    <MeeGoButton color="gradient" ReactLink to={"/admin"}>
                        Submit
                    </MeeGoButton>
                </Form>
            </Container>
        </div>
    );
}



export default AdminPage;
