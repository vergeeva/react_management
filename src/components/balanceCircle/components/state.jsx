import React, {useState} from 'react';
import MyButton from "../../UI/Button/MyButton";

const State = (props) => {
    return (
        <div>
            <label>{props.state.labelItem}</label>
            <input
                type="range"
                min="0"
                max="100"
                value={props.state.value}
                onChange={e => props.setState({...props.state, value:e.target.value})}/>
            <span>{props.state.value}</span>
            <MyButton>х</MyButton>
        </div>
    );
};

export default State;