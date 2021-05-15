import classes from '../../../Pages/Course/Course.module.css'
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const InfoDisplay = props => {
    return (
        <p className={classes.CategoryText}>
            <span style={{display: "inline-flex", width: '32px', height: '16px', justifyContent: 'center'}}>
                <FontAwesomeIcon style={{color: '#2699FB'}} icon={props.icon} />
            </span>
            {props.children}
        </p>
    );
};



export default InfoDisplay;
