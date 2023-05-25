import React, {useState} from 'react';
import InputText from "../UI/Input/InputText";
import MyButton from "../UI/Button/MyButton";
import {useNavigate} from "react-router-dom";
import {checkLengthPassword, checkPasswords} from "./functions/validation";
import {checkOldPassword} from "./functions/checkPassword";
import {updateUserPassword} from "../../requests_part/functions/profile/profile";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [isCorrectOldPassword, setIsCorrectOldPassword] = useState(false);
    const [isChangedPassword, setIsChangedPassword] = useState(false);
    const [status, setStatus] = useState('');
    const router = useNavigate();
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
        <div style={{marginTop: "15px"}}>
            <InputText
                name={"Введите старый пароль"}
                placeholder={"Введите старый пароль"}
                value={oldPassword}
                onChange={(event)=> {setOldPassword(event.target.value)}}
            />
            <MyButton
                onClick={async ()=> {
                    if (oldPassword !== "")
                    {
                        const result = await checkOldPassword(oldPassword);
                        if (result === "true")
                        {
                            setIsCorrectOldPassword(true);
                        }
                        else
                        {
                            console.log(result)
                            setStatus(result);
                        }

                        console.log("Запрос на сравнение старого пароля")
                    }
                    else alert("Заполните поле ввода старого пароля!")

                }}
            >Подтвердить</MyButton>
            {
                isCorrectOldPassword ?
                    (
                        <div>
                            <InputText
                                name={"Введите новый пароль"}
                                placeholder={"Введите новый пароль"}
                                value={password}
                                onChange={(event)=> {setPassword(event.target.value)}}
                            />
                            <InputText
                                name={"Повторите новый пароль"}
                                placeholder={"Повторите новый пароль"}
                                value={passwordConfirm}
                                onChange={(event)=> {setPasswordConfirm(event.target.value)}}
                            />
                            <MyButton
                                onClick={async () => {
                                    if (password !== "" && passwordConfirm !== "")
                                    {
                                        if (await checkPasswords(password, passwordConfirm))
                                        {
                                            if(await checkLengthPassword(password))
                                            {

                                                setStatus(await updateUserPassword(password, passwordConfirm));
                                                setIsChangedPassword(true);
                                            }
                                            else setStatus("Длина пароля минимум 8 символов");
                                        }
                                        else setStatus("Пароли не совпадают!");
                                    }
                                   else alert("Заполните поля для ввода пароля!");
                                }}
                            >Изменить пароль</MyButton>
                        </div>
                    )
                    : null
            }
            <label style={{color:"red"}}>{status}</label>
            {
                isChangedPassword ?
                    ( <MyButton  onClick={()=>{
                        router("/profile");
                    }
                    }>Перейти в профиль</MyButton>): null
            }
        </div>
        </div>
    );
};

export default ChangePassword;