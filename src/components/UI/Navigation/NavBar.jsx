import React from 'react';
import {Link} from "react-router-dom";
import classes from './Navigation.module.css';

const NavBar = () => {
    return (
            <nav className={classes.mainNavigation}>
                <div className={classes.mainNavigationWrapper}>
                    <div className={classes.container}>
                        <ul className={classes.siteNavigation}>
                            <li><Link className={classes.links} to="/">Главная</Link></li>
                            <li>
                                <a className={classes.links}>Разделы</a>
                                <ul className={classes.submenu}>
                                    <li><Link className={classes.links} to="/dailyPlanner">Ежедневник</Link></li>
                                    <li><Link className={classes.links} to="/timer">Оптимизация работы</Link></li>
                                    <li><Link className={classes.links} to="/kanbanDesks">Доска Канбан</Link></li>
                                    <li><Link className={classes.links} to="/diagrams">Диаграммы</Link></li>
                                    <li><Link className={classes.links} to="/toDoList">Списки дел</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className={classes.userNavigation}>
                            <li><Link className={classes.links} to="/login">Войти</Link></li>
                            <li><Link className={classes.links} to="/register">Регистрация</Link></li>
                            <li><Link className={classes.links} to="/logout">Выйти</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default NavBar;