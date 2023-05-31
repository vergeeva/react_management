import React, {useState} from 'react';
import State from "./components/state";
import ItemForm from "./components/itemForm";
import {deleteTaskFromList, insertTaskInList, updateTaskInList} from "../../requests_part/functions/toDoList/toDoList";
import ToDoElement from "../toDoList/toDoElement";
import CircleBalance from "./components/polygon/Main";
// import States from "./components/states";

const Circle = () => {
    const [states, setStates] = useState([
        {idBalance: '1234', labelItem: 'Здоровье', value: '100'},
        {idBalance: '4321', labelItem: 'Работа', value: '70'},
        {idBalance: '6543', labelItem: 'Любовь', value: '90'},
        {idBalance: '3456', labelItem: 'Семья', value: '75'}
    ]);

    //const [state, setState] = useState({idBalance: '1234', labelItem:'Здоровье', value:'100'});

    const setItem = async (id, stateItem) => {
        await setStates(
            [...states.map((state) =>
                state.idBalance === id
                    ? {...state, labelItem: stateItem.labelItem, value: stateItem.value}
                    : {...state}
            )]
        );
    }

    const AddState = async (userInput) => {
        if (userInput) {
            const newItem =
                {
                    labelItem: userInput.label,
                    value: userInput.value
                }
            let newItemToSet = newItem;
            console.log(newItemToSet);
            await setStates([...states, newItemToSet]);
            console.log(states);

        } else alert('Поле не должно быть пустым');
    }

    const RemoveState = async (id) => {
        await setStates([...states.filter((state) => state.idBalance !== id)])
        // await deleteTaskFromList(id);
    }

    const UpdateState = async (updated_state) => {
        if (states.length > 0) {
            await setStates(
                [...states.map((state) =>
                    state.idBalance === updated_state.idBalance
                        ? {...updated_state}
                        : {...state}
                )]
            );
            // await updateTaskInList(updated_task);
        }
    }

    return (
        <div>
            <CircleBalance n={5}/>
            <div>
                {
                    states.length !== 0 ?
                        states.map(state =>
                            (
                                <State
                                    state={state}
                                    key={state.idBalance}
                                    removeState={RemoveState}
                                    updateState={UpdateState}
                                    setItem={setItem}
                                />))
                        : <div> Добавьте сферу жизни </div>
                }
            </div>
            <div>
                <ItemForm addState={AddState}/>
            </div>
        </div>
    );
};

export default Circle;