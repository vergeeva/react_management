import React from 'react';
import classes from "../state.module.css"

const Point = (props) => {
    return (
        <text className={classes.LabelText} x={props.point.x -15} y={props.point.y - 10}>{props.point.label} </text>
    );
};

export default Point;