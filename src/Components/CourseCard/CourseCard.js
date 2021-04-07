import React from 'react';
import classes from './CourseCard.module.css'
import {Button, Card} from "react-bootstrap";

const CourseCard = props => {
    return (
        <Card className={classes.Card}>
            <Card.Img alt="Course Card" src={props.path} />
            <Card.Title>{props.title}<span>like</span></Card.Title>
            <Card.Text>Ages {props.minAge + "-" + props.maxAge}</Card.Text>
            <Card.Text>{props.description}</Card.Text>
            <Button>VIEW DETAILS</Button>
        </Card>
    );
};

export default CourseCard;
