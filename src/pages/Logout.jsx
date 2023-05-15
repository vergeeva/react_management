import React, {useContext} from 'react';
import MyButton from "../components/UI/Button/MyButton";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/authContext";

const Logout = () => {
    const router=useNavigate();
    const {setIsAuth} = useContext(AuthContext);
    setIsAuth(false);
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <p>Вы вышли из своего аккаунта</p>
            <MyButton
                style={{marginLeft:10}}
                onClick={()=> {
                    router('/')
                }}>
                Перейти на главную страницу
            </MyButton>
        </div>
    );
};

export default Logout;