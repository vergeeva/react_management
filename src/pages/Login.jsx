import React from 'react';
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
    return (
        <div>
            <p>Авторизуйтесь, чтобы использовать все возможности сайта:</p>
            <LoginForm/>
        </div>
    );
};

export default Login;