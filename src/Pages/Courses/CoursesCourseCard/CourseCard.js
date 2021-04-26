import React from 'react';
import classes from './CourseCard.module.css'

const CoursesCourseCard = () => {
    return (
        <div className={classes.Card}>
            <div className={classes.CardTop}>
                <img width="60" height="60" src="https://meegoimages.s3.us-east-2.amazonaws.com/icon-1-blue%402x.png" />
                <div>
                    <p style={{fontWeight: '500', color: "#707070", fontSize: '18px', margin: '0'}}>English</p>
                    <p>Pandente itaque viam fatorum sorte tristissima, qua praestitutum erat eum vita et imperio spoliari, itineribus interiectis  iumenjor emensis venit Petobionem oppidum Noricorum.</p>
                </div>
            </div>
            <div className={classes.CardBottom}>
                <p>9 Courses</p>
                <div className={classes.plus} />
            </div>
        </div>
    );
};

export default CoursesCourseCard;
