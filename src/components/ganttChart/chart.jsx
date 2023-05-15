import React from 'react';
import { GanttChart } from "./components/ganttChart.js";

const Chart = () => {
    const tasks = [
        { id: 1, name: "Задача 1" },
        { id: 2, name: "Задача 2" },
        { id: 3, name: "Задача 3" },
        { id: 4, name: "Задача 4" },
        { id: 5, name: "Задача 5" },
        { id: 6, name: "Задача 6" },
        { id: 7, name: "Задача 7" }
    ];
    const taskDurations = [
        {
            id: "1",
            start: new Date("2023/5/2"),
            end: new Date("2023/5/8"),
            task: 1,
        },
        {
            id: "2",
            start: new Date("2023/5/10"),
            end: new Date("2023/5/15"),
            task: 1,
        },
        {
            id: "3",
            start: new Date("2023/5/11"),
            end: new Date("2023/5/18"),
            task: 4,
        },
    ];
    const ganttChart = document.querySelector("[role=gantt-chart]");
    return <div role="gantt-chart"></div>, GanttChart(ganttChart, tasks, taskDurations);

};

export default Chart;