import React, {useContext, useState} from 'react';
import classNames from './auth.module.css';
import MyButton from '../UI/Button/MyButton'
import {AuthContext} from '../../context/authContext'
import {loginUser} from "./functions/auth";
import {checkIsAuth} from "./functions/validation";
import {Link, useNavigate} from "react-router-dom";
import InputText from "../UI/Input/InputText";


const LoginForm = () => {
    const [login, setLogin]=useState('');
    const [password, setPassword]=useState('');
    const {setIsAuth} = useContext(AuthContext);
    const [statusLoginValue, setStatusLoginValue] = useState('');
    return (
        <div className={classNames.loginContainer}>
            <InputText
                name={"Логин"}
                type="text"
                placeholder={"Логин..."}
                onChange={event => setLogin(event.target.value)}
                value={login}
            />
            <InputText
                name={"Пароль"}
                type="password"
                placeholder={"Пароль..."}
                onChange={event => setPassword(event.target.value)}
                value={password}
            />
            <div style={{display:"flex", justifyContent:"center"}}>
                <MyButton style={{padding: 10, width: "50%"}}
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
            </div>
            <label style={{color:'red'}}>{statusLoginValue}</label>
            <div style={{display:"flex", justifyContent:"center"}}>
                <Link style={{margin:10}}>Забыли пароль?</Link>
            </div>
        </div>
    );
};

export default LoginForm;