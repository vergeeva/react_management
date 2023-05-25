import React, {useState} from 'react';
import MyButton from '../UI/Button/MyButton'
import {registerUser} from "./functions/auth";
import {useNavigate} from "react-router-dom";
import {checkFieldsEmpty, checkLengthPassword, checkMail, checkPasswords} from "./functions/validation";


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
            <input
                type="text"
                placeholder={"Ваше имя..."}
                onChange={event => setUser({...user, firstName:event.target.value})}
                value={user.firstName}
            />
            <input
                type="text"
                placeholder={"Фамилия..."}
                onChange={event => setUser({...user, lastName:event.target.value})}
                value={user.lastName}
            />
            <input
                type="text"
                placeholder={"Отчество..."}
                onChange={event => setUser({...user, patronymic:event.target.value})}
                value={user.patronymic}
            />
            <input
                type="email"
                placeholder={"Электронная почта..."}
                onChange={event => setUser({...user, email:event.target.value})}
                value={user.email}
            />
            <input
                type="text"
                placeholder={"Логин..."}
                onChange={event => setUser({...user, login:event.target.value})}
                value={user.login}
            />
            <input
                type="password"
                placeholder={"Пароль..."}
                onChange={event => setUser({...user, password:event.target.value})}
                value={user.password}
            />
            <input
                type="password"
                placeholder={"Повторите пароль..."}
                onChange={event => setUser({...user, passwordConfirm:event.target.value})}
                value={user.passwordConfirm}
            />
            <MyButton
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
                <label style={{color:'red'}}>{statusValue}</label>
        </div>
    )
};

export default RegisterForm;