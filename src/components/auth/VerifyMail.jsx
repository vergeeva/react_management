import React, {useContext, useState} from 'react';
import MyButton from "../UI/Button/MyButton";
import {useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/authContext";
import {VerifyCodeAuthAccount, verifyMailNewAccount} from "./functions/mail";

const VerifyMail = () => {
    const [verCode, setVerCode] = useState('');
    const {isAuth} = useContext(AuthContext);
    const location = useLocation();
    const [status, setStatus] = useState('');
    const router = useNavigate();
    return (
        <div>
            <p onClick={()=> {console.log(location.state.email)}}>Введите код подтверждения, отправленный на почту {location.state.email}</p>
            <input type="text"
                value={verCode}
                onChange={event => setVerCode(event.target.value)}
            />
            <MyButton
            onClick={async () => {
                if (isAuth)
                {
                    setStatus(await VerifyCodeAuthAccount(verCode));
                }
                else
                {
                    setStatus(await verifyMailNewAccount(location.state.email, verCode));
                }
            }}>
            Подтвердить почту
            </MyButton>
            <label style={{color: "red"}}>{status}</label>
            {
                status==="Почта успешно подтверждена" && isAuth ?
                    <MyButton  onClick={()=>{
                        router("/profile");
                    }
                    }>Перейти в профиль</MyButton> : null
            }
            {
                status==="Почта успешно подтверждена" && !isAuth ?
                    <MyButton  onClick={()=>{
                        router("/login");
                    }
                    }>Авторизоваться</MyButton>
                : null
            }
        </div>
    );
};

export default VerifyMail;