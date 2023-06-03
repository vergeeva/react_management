import React from 'react';
import Point from "./Point";
import classes from "../state.module.css"

const Polygon = (props) => {
     function valueToPoint(value, index, total) {
        const x = 0;
        const y = -value * 0.8;
        // находим угол
        const angle = ((Math.PI * 2) / total) * index;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        // используем тригонометрию и считаем координаты вершины многоугольника
        const tx = x * cos - y * sin + 200;
        const ty = x * sin + y * cos + 200;
        return {
            x: tx,
            y: ty
        };
    }
    let coordinatesXY = [];
     function getPoints(points) {
        const total = points.length;
        return points.map( function (point, i) {
            const pointValue = valueToPoint(+point.value * 2 + 20, i, total);
             coordinatesXY?.push({x: pointValue.x, y: pointValue.y, label: point.labelItem})
            return pointValue.x + ',' + pointValue.y;
        }).join(" ");
    }
    const points =  getPoints(props.points);
    return (
        <svg height={props.height} width={props.width}>
            <g>
                <polygon className={classes.polygonEL} points={points} fill={props.color}></polygon>
                <circle className={classes.circleLine} cx={200} cy={200} strokeWidth="3" r={180}></circle>
                {
                    coordinatesXY?.map((point, i) => <Point key={point.label + point.x} point={point}/>)
                }
            </g>
        </svg>
    );
};

export default Polygon;