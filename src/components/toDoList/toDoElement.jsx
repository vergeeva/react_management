import React, {useState} from 'react';
import classes from './todoList.module.css'
import InputText from "../UI/Input/InputText";

const ToDoElement = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const rootClasses=[classes.itemText];
    if (props.todo.isChecked)
    {
        rootClasses.push(classes.strike);
    }


    if (!isEditing) {
        return (
            <div key={props.todo.idTaskInList} className={classes.itemTodo}>
                <p className={rootClasses.join(' ')}
                   onClick={() => {
                       props.toggleTask(props.todo.idTaskInList)
                   }}
                >
                    {props.todo.textOfItem}
                </p>
                <div style={{display: "flex"}}>
                    <div className={classes.itemDelete}
                         onClick={() => setIsEditing(true)}
                    >
                        ✎
                    </div>
                    <div className={classes.itemDelete} onClick={() => props.removeTask(props.todo.idTaskInList)}>
                        ✕
                    </div>
                </div>

            </div>
        )
    }
    else {
        return (
            <div key={props.todo.idTaskInList} className={classes.itemTodo}>
                <InputText
                   value={props.todo.textOfItem}
                   onChange={async (event) => { await props.setTask(props.todo.idTaskInList, event.target.value)}}
                ></InputText>
                <div style={{display: "flex"}}>
                    <div className={classes.itemDelete}
                         onClick={() =>
                         {props.updateTask(props.todo)
                          setIsEditing(false);
                         }}
                    >
                        ✓
                    </div>
                </div>

            </div>
        )
    }
};

export default ToDoElement;