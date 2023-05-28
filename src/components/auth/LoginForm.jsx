import React, {useContext, useState} from 'react';
import classNames from './auth.module.css';
import MyButton from '../UI/Button/MyButton'
import {AuthContext} from '../../context/authContext'
import {loginUser} from "./functions/auth";
import {checkIsAuth} from "./functions/validation";
import {useNavigate} from "react-router-dom";


const LoginForm = () => {
    const [login, setLogin]=useState('');
    const [password, setPassword]=useState('');
    const {setIsAuth} = useContext(AuthContext);
    const [statusLoginValue, setStatusLoginValue] = useState('');
    return (
        <div className={classNames.loginContainer}>
            <input
                className={classNames.loginInput}
                type="text"
                placeholder={"Логин..."}
                onChange={event => setLogin(event.target.value)}
                value={login}
            />
            <input
                className={classNames.loginInput}
                type="password"
                placeholder={"Пароль..."}
                onChange={event => setPassword(event.target.value)}
                value={password}
            />
            <MyButton
            onClick={async ()=>{
                await setStatusLoginValue(await loginUser(login, password));
                // await console.log(statusLoginValue);
                if (await checkIsAuth())
                {
                    await setIsAuth(checkIsAuth());
                    await window.location.reload();
                }
            }}>
                Войти
            </MyButton>
            <label style={{color:'red'}}>{statusLoginValue}</label>
            {/*<p><a href={"#"}>Забыли пароль?</a></p>*/}
        </div>
    );
};

export default LoginForm;