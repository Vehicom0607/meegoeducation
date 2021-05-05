import React from 'react';
import {Link} from "react-router-dom";
import classes from './Button.module.css'

const MeeGoButton = props => {
    console.log(props.style)
    let Button;
    let ButtonClasses = [classes.Button]
    ButtonClasses = ButtonClasses.concat(props.className)
    if (props.color === 'yellow') {
        ButtonClasses.push(classes.Yellow)
    } else if (props.color === 'red') {
        ButtonClasses.push(classes.Red)
    }  else if (props.color === 'gradient') {
    ButtonClasses.push(classes.Gradient)
    } else if (props.color === 'white') {
        ButtonClasses.push(classes.White)
    }
    if (props.AddClass) {
        ButtonClasses.push(props.AddClass)
    }
    if (props.slim) {
        ButtonClasses.push(classes.Slim)
    }

    if (props.ReactLink) {
        Button = <Link to={props.path} style={props.style} className={ButtonClasses.join(" ")}>{props.children}</Link>
    } else {
        Button = <a href={props.path} style={props.style} className={ButtonClasses.join(" ")}>{props.children}</a>
    }

    return Button
};

export default MeeGoButton;
