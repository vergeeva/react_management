import React from 'react';
import classes from './MyInput.module.css'

const InputText = (props) => {
    return (
        <div className={classes.elementContainer}>
            <div className={classes.textField}>
                <label className={classes.textField__label}>{props.name}</label>
                <input
                    className={classes.textField__input}
                    {...props}
                />
            </div>
        </div>
    );
};

export default InputText;