import React, {useState} from 'react';
import State from "./components/state";
// import States from "./components/states";

const Circle = () => {
    const [states, setStates] = useState([
        {idBalance: '1234', labelItem:'Здоровье', value:'100'},
        {idBalance: '4321', labelItem:'Работа', value:'70'},
        {idBalance: '6543', labelItem:'Любовь', value:'90'},
        {idBalance: '3456', labelItem:'Семья', value:'75'}
    ]);
    const stats=[
        {idBalance: '1234', labelItem:'Здоровье', value:'100'},
        {idBalance: '4321', labelItem:'Работа', value:'70'},
        {idBalance: '6543', labelItem:'Любовь', value:'90'},
        {idBalance: '3456', labelItem:'Семья', value:'75'}
    ];
    // setStates(stats);
    const [state, setState] = useState({idBalance: '1234', labelItem:'Здоровье', value:'100'});
    const [state1, setState1] = useState({idBalance: '1345', labelItem:'Семья', value:'100'});
    return (
        <div>
            <State
                state={state}
                setState={setState}
            />
            <State
                state={state1}
                setState={setState1}
            />

        </div>
    );
};

export default Circle;