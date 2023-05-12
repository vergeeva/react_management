import React from 'react';
import Agenda from "../components/dailyPlanner/calendar";
import classes from '../components/dailyPlanner/planner.module.css';

const DailyPlanner = () => {
    return (
        <div className={classes.planner}>

            <h1 style={{textAlign:'center', margin:0, marginBottom:25}}><br></br>Ежедневник</h1>
            <Agenda/>
        </div>
    );
};

export default DailyPlanner;