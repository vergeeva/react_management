import React, {useState} from 'react';
import InputText from "../../UI/Input/InputText";
import MyButton from "../../UI/Button/MyButton";

const ItemForm = (props) => {
    const [userInput, setUserInput] = useState({label: "", value: 0});
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addState(userInput);
        setUserInput({label: "", value: 0});
    }
    return (
        <form>
            <InputText
                name={"Название сферы жизни"}
                type="text"
                placeholder={"Сфера жизни..."}
                onChange={(e) => {
                    setUserInput({...userInput, label: e.currentTarget.value});
                }}
                value={userInput.label}
            />
            <input
                onChange={(e) => {
                    setUserInput({...userInput, value: Number(e.currentTarget.value)});
                }}
                value={userInput.value}
                type={"number"} min={0} max={100}/>
            <MyButton
                onClick={handleSubmit}
            >Добавить сферу</MyButton>
        </form>
    );
};

export default ItemForm;