import React from 'react';
import classes from './sectionStyle.module.css'

const Section = (props) => {
    return (
        <div className={classes.projcardContainer}>
            <div className={classes.projcard}>
                <div className={classes.projcardInnerbox}>
                    <img className={classes.projcardImg} src={props.img} alt={props.imageAlt}/>
                    <div className={classes.projcardTextbox}>
                        <div className={classes.projcardTitle}>{props.title}</div>
                        <div className={classes.projcardDescription}>{props.description}</div>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default Section;