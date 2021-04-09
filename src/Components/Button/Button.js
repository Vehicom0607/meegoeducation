import React from 'react';
import {Link} from "react-router-dom";
import classes from './Button.module.css'

const MeeGoButton = props => {
    let Button;
    const ButtonClasses = [classes.Button]
    if (props.color === 'yellow') {
        ButtonClasses.push(classes.Yellow)
    } else if (props.color === 'red') {
        ButtonClasses.push(classes.Red)
    }  else if (props.color === 'gradient') {
    ButtonClasses.push(classes.Gradient)
    }
    if (props.ReactLink) {
        Button = <Link to={props.path} className={ButtonClasses.join(" ")}>{props.children}</Link>
    } else {
        Button = <a href={props.path} className={ButtonClasses.join(" ")}>{props.children}</a>
    }

    return Button
};

export default MeeGoButton;
