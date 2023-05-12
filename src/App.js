import React, {useState} from 'react';
import PomodoroTimer from "./components/pomodorro/timerObject";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/UI/Navigation/NavBar";
import AppRouter from "./components/AppRouter";
import './styles/App.css'
import MySelect from "./components/UI/Select/MySelect";

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
            <MySelect value={'лала'} options={[{'value': 'лалалала', 'name': 'Тестовый'}]}/>
        </BrowserRouter>
    );
};

export default App;