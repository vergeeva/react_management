import React from 'react';
import RegisterForm from "../components/auth/RegisterForm";

const Registration = () => {
    return (
        <div style={{display: "flex", justifyContent:"center"}}>
            <div>
                <h1 style={{textAlign:"center"}}>Заполните необходимые поля</h1>
                <RegisterForm/>
            </div>
        </div>
    );
};

export default Registration;