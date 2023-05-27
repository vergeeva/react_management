import React from 'react';
import Agenda from "../components/dailyPlanner/calendar";
import classes from '../components/dailyPlanner/planner.module.css';
import {getItems} from '../components/dailyPlanner/calendar'


const DailyPlanner = () =>
{
    return (
        <div className={classes.planner}>
            <h1 style={{textAlign:'center', margin:0, marginBottom:25}}><br></br>Ежедневник</h1>
            <Agenda items={getItems()}/>
        </div>
    );
};

export default DailyPlanner;