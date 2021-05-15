import React from 'react';
import classes from './Card.module.css'

const MeeGoCard = props => {
    return (
        <div className={classes.Card}>
            {props.children}
        </div>
    );
};

export default MeeGoCard;
