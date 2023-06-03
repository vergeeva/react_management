import React, {useState} from 'react';
import MyButton from "../../UI/Button/MyButton";
import {insertTaskInList} from "../../../requests_part/functions/toDoList/toDoList";
import classes from "./state.module.css"
import InputText from "../../UI/Input/InputText";
import {updateStat} from "../../../requests_part/functions/balanceCircle/balanceCircle";

const State = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    if (!isEditing) {
        return (
            <div>
                <div className={classes.allContainer}>
                    <div className={classes.statsContainer}>
                        <label className={classes.itemLabel}>{props.state.labelItem}</label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={props.state.value}
                            onChange={async (e) => {
                                await props.setItem(props.state.idBalance, {...props.state, value: e.target.value});
                                await updateStat(props.state);
                            }
                            }/>
                        <span className={classes.spanStyle}>{props.state.value}</span>
                    </div>
                    <div className={classes.buttonContainer}>
                        <button
                            className={classes.buttonStyle}
                            onClick={() => setIsEditing(true)}
                        >
                            ✎
                        </button>
                        <button className={classes.buttonStyle} onClick={() => props.removeState(props.state.idBalance)}
                        >х</button>
                    </div>
                </div>
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
                onChange={async (e) => {
                    await props.setItem(props.state.idBalance, {...props.state, value: e.target.value});
                }
                }/>
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