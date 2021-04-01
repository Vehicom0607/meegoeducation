import React, {Component} from 'react';
import MeeGoNavbar from "../../Components/Navbar/Navbar";
import classes from './index.module.css'
import {Col, Container, Image, Row} from "react-bootstrap";
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
                        <Row>
                            <Col>
                                <p className="text-white display-4 text-left">Learn Together,</p>
                                <p className="text-white display-4 text-left">Grow Together.</p>
                                <p className="text-white text-left">Enrichment courses with engaging teachers for a stimulating learning experience.</p>

                            </Col>
                            <Col>
                                <Image alt="Man holding something idk" src="/Index/header1.png"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}


export default IndexPage;
