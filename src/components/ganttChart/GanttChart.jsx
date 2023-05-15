import React, {useEffect} from 'react';
import Chart from "./chart";
import MyButton from "../UI/Button/MyButton";
import BackButton from "../pomodorro/BackButton";

const GanttChart = () => {
    useEffect(() => {
        Chart();
    }, [])
    return (
        <div id={"gantt"}>
            <div role="gantt-chart"></div>
        </div>
    );
};

export default GanttChart;