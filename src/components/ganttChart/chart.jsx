import React from 'react';
import { GanttChart } from "./components/ganttChart.js";
import {getDurations, getTasks} from "../../requests_part/functions/ganttChart/ganttChart";

const Chart = async () => {
    const ganttChart = document.querySelector("[role=gantt-chart]");
    const tasks = await getTasks();
    const tasksDurations = await getDurations(tasks);
    return <div role="gantt-chart"></div>, GanttChart(ganttChart, tasks, tasksDurations);

};

export default Chart;