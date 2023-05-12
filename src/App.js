import React, {useState} from 'react';
import PomodoroTimer from "./components/pomodorro/timerObject";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/UI/Navigation/NavBar";
import AppRouter from "./components/AppRouter";
import './styles/App.css'
import MySelect from "./components/UI/Select/MySelect";
import {AuthContext} from "./context/authContext";

const App = () => {
    const [isAuth, setIsAuth] = useState(true);
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>

    );
};

export default App;