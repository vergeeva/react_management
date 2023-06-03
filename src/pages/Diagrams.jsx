import React, {useEffect, useState} from 'react';
import MySelect from "../components/UI/Select/MySelect";
import Chart from "../components/ganttChart/chart";
import Circle from "../components/balanceCircle/circle";
import GanttChart from "../components/ganttChart/GanttChart";
import Matrix from "../components/matrix/Matrix";

const Diagrams = () => {
    const options = [
        {value:'gantt', name: 'Диаграмма Гантта'},
        {value:'balanceCircle', name: 'Колесо жизненного баланса'}
    ]
    const [selectedDiagram, setSelectedDiagram] = useState(options[0].value);
    const Diagram = () =>{
        switch(selectedDiagram)
        {
            case 'gantt': return <GanttChart/>;
            case 'balanceCircle': return <Circle/>;
            default:return <p>Выберите вид диаграммы</p>
        }
    }
    return (
        <div style={{backgroundColor:"white", margin: '16px'}}>
            <div>
                <label style={{fontFamily: "Open Sans, serif", fontSize:'17px', margin: '16px'}}>Выберите диаграмму:</label>
                <MySelect
                    options={options}
                    onChange={selectedDiagram =>{setSelectedDiagram(selectedDiagram)}}>
                </MySelect>
            </div>
            <div>
                {
                    Diagram()
                }
            </div>
        </div>
    );
};
export default Diagrams;