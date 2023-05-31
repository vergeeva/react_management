import React, {useEffect, useState} from 'react';
import classes from './todoList.module.css'
import ToDoForm from "./toDoForm";
import ToDoElement from "./toDoElement";
import {getUserProfile} from "../../requests_part/functions/profile/profile";
import {
    deleteTaskFromList,
    getAllTasks,
    insertTaskInList,
    updateTaskInList
} from "../../requests_part/functions/toDoList/toDoList";

const TodoList = () => {
    const [toDoElements, setToDoElements] = useState([])
    useEffect( () => {
        (async () => {
            const items = await getAllTasks();
            if (items.length !== 0)
            {
                await setToDoElements(items);
            }
        })();
    },[]);
    const AddTask = async (userInput) => {
        if (userInput)
        {
            const newItem =
                {
                    textOfItem: userInput,
                    isChecked: false
                }
            let newItemToSet = await insertTaskInList(newItem);
            console.log(newItemToSet);
            await setToDoElements([...toDoElements, newItemToSet]);
            console.log(toDoElements);

        }
        else alert('Поле не должно быть пустым');
    }
    const RemoveTask = async (id) => {
        await setToDoElements([...toDoElements.filter((todo) => todo.idTaskInList !== id)])
        await deleteTaskFromList(id);
    }

    const HandleToggle = async (id) => {
        if (toDoElements.length > 0)
        {
            await setToDoElements(
                [...toDoElements.map((todo)=>
                    todo.idTaskInList === id
                        ? {...todo, isChecked: !todo.isChecked}
                        :{...todo}
                )]
            );

            for (let i=0; i<toDoElements.length;i++)
            {
                toDoElements[i].idTaskInList === id
                    ? await updateTaskInList({...toDoElements[i], isChecked: !toDoElements[i].isChecked })
                    : null
            }
        }
    }

    const UpdateTask = async (updated_task) =>{
        if (toDoElements.length > 0)
        {
            await setToDoElements(
                [...toDoElements.map((todo)=>
                    todo.idTaskInList === updated_task.idTaskInList
                        ? {...updated_task}
                        :{...todo}
                )]
            );
            await updateTaskInList(updated_task);
        }
    }

    const setTask = async (id, textOfTask) => {
        await setToDoElements(
            [...toDoElements.map((todo)=>
                todo.idTaskInList === id
                    ? {...todo, textOfItem:textOfTask}
                    :{...todo}
            )]
        );
    }
    return (
        <div className={classes.ListToDoWrapper}>
            <div className={classes.ListToDo}>
                <ToDoForm addTask={AddTask}/>
                {
                    toDoElements.length !==0 ?
                    toDoElements.map(element =>
                    (
                    <ToDoElement
                    todo={element}
                    key={element.idTaskInList}
                    toggleTask={HandleToggle}
                    removeTask={RemoveTask}
                    updateTask={UpdateTask}
                    setTask={setTask}
                    />))
                    : <div> Добавьте задачу в список </div>
                }
            </div>
        </div>
    );
};

export default TodoList;