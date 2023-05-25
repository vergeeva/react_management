import React, {useState} from 'react';
import MyButton from "../UI/Button/MyButton";
import classes from './todoList.module.css'

const ToDoForm = (props) => {
    const [userInput, setUserInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(userInput);
        setUserInput('');
    }
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }
    const handleKeyPress = (e) => {
        if(e.key==="Enter")
        {
            handleSubmit(e);
        }
    }
    return (
        <form onSubmit={handleSubmit} style={{marginBottom:"15px"}}>
            <input
                className={classes.inputForm}
                value={userInput}
                type='text'
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите значение..."
            />
            <MyButton>
                Добавить
            </MyButton>
        </form>
    );
};

export default ToDoForm;