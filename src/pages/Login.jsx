import React from 'react';
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <div>
                <h2>Авторизуйтесь, чтобы использовать все возможности сайта:</h2>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
};

export default Login;