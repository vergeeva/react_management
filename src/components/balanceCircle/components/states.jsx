import React, {useState} from 'react';
import State from "./state";
import MyButton from "../../UI/Button/MyButton";

const States = (props) => {
    if (!props.states.length) {
        return (
            <div>
                <p style={{textAlign: 'center'}}>
                    Сферы жизни не добавлены
                </p>
                <MyButton>+</MyButton>
            </div>
        )
    }
    const statusState = 0;
    const setStatusState = (old, selected) => {
        old = selected;
    }
        return (
        <div>
            {
                props.states.map(state =>
                    (
                        <State
                            state={state}
                            setState={props.setStates}
                        />
                    )

                )
            }
        </div>
    );
};

export default States;