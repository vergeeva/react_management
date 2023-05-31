import React, {useState} from 'react';
import MyButton from "../../UI/Button/MyButton";
import {insertTaskInList} from "../../../requests_part/functions/toDoList/toDoList";
import classes from "../../toDoList/todoList.module.css";
import InputText from "../../UI/Input/InputText";

const State = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    if (!isEditing) {
        return (
            <div>
                <label>{props.state.labelItem}</label>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={props.state.value}
                    onChange={async e => await props.setItem(props.state.idBalance, {...props.state, value: e.target.value})}/>
                <span>{props.state.value}</span>
                <MyButton
                    onClick={() => setIsEditing(true)}
                >
                    ✎
                </MyButton>
                <MyButton onClick={() => props.removeState(props.state.idBalance)}
                >х</MyButton>
            </div>
        );
    } else {
        return (<div>
            <InputText
            value={props.state.labelItem}
            onChange={async e => await props.setItem(props.state.idBalance, {...props.state, labelItem: e.target.value})}
            />
            <input
                type="range"
                min="0"
                max="100"
                value={props.state.value}
                onChange={e => props.setItem(props.state.idBalance, {...props.state, value: e.target.value})}/>
            <span>{props.state.value}</span>
            <MyButton
                onClick={() => {
                    props.updateState(props.state)
                    setIsEditing(false);
                }}
            >
                ✓
            </MyButton>
        </div>)
    }

};

export default State;