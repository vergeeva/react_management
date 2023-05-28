import React, {useEffect} from 'react';
import Chart from "./chart";
import {getAllTasks} from "../../requests_part/functions/toDoList/toDoList";


const GanttChart = () => {
    useEffect( () => {
        (async () => {
            await Chart();
        })();
    },[]);
    return (
        <div id={"gantt"}>
            <div role="gantt-chart"></div>
        </div>
    );
};

export default GanttChart;