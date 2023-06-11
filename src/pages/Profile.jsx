import React, {useEffect, useState} from 'react';
import MyButton from "../components/UI/Button/MyButton";
import {getUserProfile, updateUserProfile} from "../requests_part/functions/profile/profile";
import {checkIsAuth} from "../components/auth/functions/validation";
import {useNavigate} from "react-router-dom";
import VerifyMail from "../components/auth/VerifyMail";
import {sendCodeAuthAccount} from "../components/auth/functions/mail";
import InputText from "../components/UI/Input/InputText";

const Profile = () => {
        const [user, setUser] = useState(
            {
                    login: "",
                    firstName: "",
                    lastName: "",
                    patronymic: "",
                    email: ""}
        )
    useEffect( () => {
        (async () => {
            await setUser(await getUserProfile());
        })();
    },[]);
        const router = useNavigate();
    const [statusValue, setStatusValue] = useState('');
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <div style={{display:'grid'}}>
                <h2>Личные данные профиля</h2>
                <div>
                    <InputText name={"Ваш логин"} type={"text"} value={user.login} onChange={event => setUser({...user, login:event.target.value})}/>
                </div>
                <div>
                    <InputText name="Ваше имя" type={"text"} value={user.firstName} onChange={event => setUser({...user, firstName:event.target.value})}/>
                </div>
                <div>
                    <InputText name="Фамилия" type={"text"} value={user.lastName} onChange={event => setUser({...user, lastName:event.target.value})}/>
                </div>
                <div>
                    <InputText name="Отчество" type={"text"} value={user.patronymic} onChange={event => setUser({...user, patronymic:event.target.value})}/>
                </div>
                <div>
                    <InputText name="Почта" type={"text"} value={user.email} onChange={event => setUser({...user, email:event.target.value})}/>
                    <MyButton
                        onClick={async ()=> {
                            await sendCodeAuthAccount();
                            await router('/verifyMail', {state: {email: user.email}});
                        }}
                    >Верифицировать почту</MyButton>
                </div>
                <div>
                    <MyButton
                        onClick={async ()=>{
                            await router("/changePassword");
                        }}
                    >Изменить пароль</MyButton>
                </div>
                <div>
                    <MyButton
                        onClick={async () =>{
                            await setStatusValue(await updateUserProfile(user));
                        }}
                    >Сохранить изменения</MyButton>
                </div>
                <label style={{color:'red'}}>{statusValue}</label>
            </div>
        </div>

    );
};

export default Profile;