import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/UI/Navigation/NavBar";
import AppRouter from "./components/AppRouter";
import './styles/App.css'
import {AuthContext} from "./context/authContext";
import {checkIsAuth} from "./components/auth/functions/validation";
import {refresh} from "./components/auth/functions/auth";

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    useEffect( () => {
        (async () => {
            if (!await checkIsAuth())
            {
                try {
                    await refresh();
                }
                catch (e)
                {
                    console.log(e);
                }

            }
            setIsAuth(await checkIsAuth());
        })();
    },[checkIsAuth()]);
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