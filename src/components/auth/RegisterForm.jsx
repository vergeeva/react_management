import React, {useState} from 'react';
import MyButton from '../UI/Button/MyButton'
import {registerUser} from "./functions/auth";
import {useNavigate} from "react-router-dom";
import {checkFieldsEmpty, checkLengthPassword, checkMail, checkPasswords} from "./functions/validation";
import InputText from "../UI/Input/InputText";


const RegisterForm = () => {
    const [user, setUser] = useState(
        {
            firstName: "",
            lastName: "",
            patronymic: "",
            email: "",
            login: "",
            password: "",
            passwordConfirm: ""}
        )
    const router = useNavigate();
    const [statusValue, setStatusValue] = useState('');
    return (
        <div style={{display:'grid', maxWidth:'50%'}}>
            <InputText
                name={"Имя"}
                type="text"
                placeholder={"Ваше имя..."}
                onChange={event => setUser({...user, firstName:event.target.value})}
                value={user.firstName}
            />
            <InputText
                name={"Фамилия"}
                type="text"
                placeholder={"Фамилия..."}
                onChange={event => setUser({...user, lastName:event.target.value})}
                value={user.lastName}
            />
            <InputText
                name={"Отчество"}
                type="text"
                placeholder={"Отчество..."}
                onChange={event => setUser({...user, patronymic:event.target.value})}
                value={user.patronymic}
            />
            <InputText
                name={"Почта"}
                type="email"
                placeholder={"Электронная почта..."}
                onChange={event => setUser({...user, email:event.target.value})}
                value={user.email}
            />
            <InputText
                name={"Логин"}
                type="text"
                placeholder={"Логин..."}
                onChange={event => setUser({...user, login:event.target.value})}
                value={user.login}
            />
            <InputText
                name={"Пароль"}
                type="password"
                placeholder={"Пароль..."}
                onChange={event => setUser({...user, password:event.target.value})}
                value={user.password}
            />
            <InputText
                name={"Повторите пароль"}
                type="password"
                placeholder={"Повторите пароль..."}
                onChange={event => setUser({...user, passwordConfirm:event.target.value})}
                value={user.passwordConfirm}
            />
            <MyButton
                style={{padding:10}}
            onClick={async ()=>{
                    if (await checkFieldsEmpty(user))
                    {
                            setStatusValue('Заполните все поля!')
                    }
                    else if (!await checkMail(user.email))
                    {
                            setStatusValue('Введен некорректный почтовый адрес!')
                    }
                    else if (!await checkPasswords(user.password, user.passwordConfirm))
                    {
                            setStatusValue('Пароли не совпадают!')
                    }
                    else if(await checkLengthPassword(user.password))
                    {
                            setStatusValue(await registerUser(user));
                            if (statusValue === "")
                            {
                                    await router('/verifyMail', {state: {email: user.email}});
                            }
                    }
                    else
                    {
                            setStatusValue('Длина пароля минимум 8 символов')
                    }
            }}
            >Регистрация</MyButton>
                <label style={{color:'red', textAlign:"center", marginTop:10}}>{statusValue}</label>
        </div>
    )
};

export default RegisterForm;