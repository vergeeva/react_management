import React, {useState} from 'react';
import InputText from "../../UI/Input/InputText";
import MyButton from "../../UI/Button/MyButton";

const ItemForm = (props) => {
    const [userInput, setUserInput] = useState({label: "", value: 0});
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput.label !== "")
        {
            props.addState(userInput);
            setUserInput({label: "", value: 0});
        }
        else
        {
            alert("Поле наименования не должно быть пустым");
        }
    }
    return (
        <form style={{display: "grid"}}>
            <InputText
                name={"Название сферы жизни"}
                style={{margin: 10}}
                type="text"
                placeholder={"Сфера жизни..."}
                onChange={(e) => {
                    setUserInput({...userInput, label: e.target.value});
                }}
                value={userInput.label}
            />
            <InputText
                name={"Оценка сферы жизни (от 0 до 100):"}
                style={{margin: 10}}
                onChange={async (e) => {
                    await setUserInput({...userInput, value: Number(e.target.value)});
                    if (e.target.value > 100 || e.target.value < 0)
                    {
                        await setUserInput({...userInput, value: 100});
                        alert("Значение должно быть в диапазоне от 0 до 100");
                    }
                }}
                value={userInput.value}
                type={"number"} min={0} max={100}
            />
            <MyButton
                style={{width: 150, padding:10, marginLeft:"30%"}}
                onClick={handleSubmit}
            >Добавить сферу</MyButton>
        </form>
    );
};

export default ItemForm;