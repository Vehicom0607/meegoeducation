import React, {Component} from 'react';
import MeeGoNavbar from "../../Components/Navbar/Navbar";
import classes from './index.module.css'
import {Col, Container, Image, Row} from "react-bootstrap";
import IndexCarousel from "./Carousel/Carousel";
import MeeGoButton from "../../Components/Button/Button";
class IndexPage extends Component {

    componentDidMount() {
        document.title = "MeeGo Education"
    }


    render() {
        return (
            <div>
                <div className={classes.BgHeader}>
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
                    <IndexCarousel />
                </Container>
            </div>
        );
    }
}


export default IndexPage;
