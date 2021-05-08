import React from 'react';
import classes from './SyllabusDisplay.module.css'

const SyllabusDisplay = props => {
    const syllabusItems = props.items.map((item, index) => {
        return <li className="py-1" key={index}>{item}</li>
    })

    return (
        <div className="my-4 my-md-0 w-100">
            <hr />
            <h2 className={classes.Text}>
                This course includes
            </h2>
            <ul className={classes.Text} >
                {syllabusItems}
            </ul>
        </div>
    );
};

export default SyllabusDisplay;
