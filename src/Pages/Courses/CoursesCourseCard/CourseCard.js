import React from 'react';
import classes from './CourseCard.module.css'

const CoursesCourseCard = props => {
    return (
        <div className={classes.Card}>
            <div className={classes.CardTop}>
                <img alt="category icon" width="60" height="60" src="https://meegoimages.s3.us-east-2.amazonaws.com/icon-1-blue%402x.png" />
                <div style={{paddingLeft:'5px'}}>
                    <p style={{fontWeight: '500', color: "#707070", fontSize: '18px', margin: '0'}}>{props.course}</p>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className={classes.CardBottom}>
                <p>{props.numCourses} Courses</p>
                <div className={classes.plus} />
            </div>
        </div>
    );
};

export default CoursesCourseCard;
