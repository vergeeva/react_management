import React from 'react';
import {Link} from "react-router-dom";
import classes from './Navigation.module.css';

const NavBar = () => {
    return (
            <nav className={classes.mainNavigation}>
                <div className={classes.mainNavigationWrapper}>
                    <div className={classes.container}>
                        <ul className={classes.siteNavigation}>
                            <li><Link to="/">Главная</Link></li>
                            <li>
                                <a>Разделы</a>
                                <ul className={classes.submenu}>
                                    <li><Link to="/dailyPlanner">Ежедневник</Link></li>
                                    <li><Link to="/timer">Оптимизация работы</Link></li>
                                    <li><Link to="/kanbanDesks">Доска Канбан</Link></li>
                                    <li><Link to="/diagrams">Диаграммы</Link></li>
                                    <li><Link to="/toDoList">Списки дел</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className={classes.userNavigation}>
                            <li><Link to="/login">Войти</Link></li>
                            <li><Link to="/register">Регистрация</Link></li>
                            <li><Link to="/logout">Выйти</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default NavBar;