import React, {useEffect, useState} from 'react';
import State from "./components/state";
import ItemForm from "./components/itemForm";
import Polygon from "./components/polygon/Polygon";
import {
    deleteStat,
    getAllStats,
    insertStat,
    updateStat
} from "../../requests_part/functions/balanceCircle/balanceCircle";
import Loader from "../UI/Loader/Loader";

const Circle = () => {
    const [states, setStates] = useState([]);
    useEffect( () => {
        (async () => {
            const stats = await getAllStats();
            if (stats.length !== 0)
            {
                await setStates(stats);
                await console.log(stats);
                await console.log(states);
            }
        })();
    },[]);
    // const [states, setStates] = useState([]);
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
            let newItemToSet = {
                labelItem: userInput.label,
                value: userInput.value
            };
            await setStates([...states, await insertStat(newItemToSet)]);
            console.log(states);

        } else alert('Поле не должно быть пустым');
    }

    const RemoveState = async (id) => {
        await setStates([...states.filter((state) => state.idBalance !== id)]);
        await deleteStat(id);
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
            console.log(updated_state);
            await updateStat(updated_state);
            // await updateTaskInList(updated_task);
        }
    }

    return (
        <div style={{marginTop: 15, display: "flex", justifyContent: "center"}}>
            <div>
                <div style={{marginTop: 15, display: "flex", justifyContent: "center"}}>
                    {
                        states.length > 2 ?
                            (
                                <Polygon
                                    width={500}
                                    height={400}
                                    color={"#000"}
                                    points={states}
                                />
                            ):<Loader/>
                    }
                </div>
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
                            : <div style={{padding:15, textAlign:"center"}}> Добавьте сферу жизни </div>
                    }
                </div>
                <div>
                    <ItemForm addState={AddState}/>
                </div>
            </div>
        </div>
    );
};

export default Circle;