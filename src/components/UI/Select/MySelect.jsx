import React from 'react';
import classes from './select_style.module.css'

const MySelect = (props) => {
    return (
        <select
            className={classes.uniqueSelect}
            value={props.value}
            onChange={event => props.onChange(event.target.value)}
        >
            {props.options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;