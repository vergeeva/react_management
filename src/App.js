import React, {useEffect, useState} from 'react';
import {BrowserRouter, useNavigate} from "react-router-dom";
import NavBar from "./components/UI/Navigation/NavBar";
import AppRouter from "./components/AppRouter";
import './styles/App.css'
import {AuthContext} from "./context/authContext";
import {checkIsAuth} from "./components/auth/functions/validation";
import {refresh} from "./components/auth/functions/auth";
import {useLocation} from "react-router-dom";

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    useEffect( () => {
        (async () => {
            if (!isAuth)
            {
                try {
                    await refresh();
                    setIsAuth(await checkIsAuth());
                }
                catch (e)
                {
                    console.log(e);
                }
            }
        })();
    },[document.cookie, isAuth]);
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
        }}>
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>

    );
};

export default App;