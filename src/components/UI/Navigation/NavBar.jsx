import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import classes from './Navigation.module.css';
import {AuthContext} from "../../../context/authContext";
import {logoutUser} from "../../auth/functions/auth";
import {checkIsAuth} from "../../auth/functions/validation";

const NavBar = () => {
    const [isHover, setIsHover] = useState(false);
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
            <nav className={classes.mainNavigation}>
                <div className={classes.mainNavigationWrapper}>
                    <div className={classes.container}>
                        <ul className={classes.siteNavigation}>
                            <li><Link className={classes.links} to="/">Главная</Link></li>
                            <li
                                className={classes.sections}
                                onMouseEnter={() => {
                                    setIsHover(true);}}
                                onMouseLeave={() => {
                                    setIsHover(false);
                                 }}>
                                <a className={classes.links} >
                                    Разделы</a>
                                {
                                    isHover && isAuth
                                    ?
                                        (
                                            <ul className={classes.submenu}>
                                                <li><Link className={classes.submenuLink} to="/dailyPlanner">Ежедневник</Link></li>
                                                <li><Link className={classes.submenuLink} to="/timer">Оптимизация работы</Link></li>
                                                <li><Link className={classes.submenuLink} to="/kanbanDesks">Доска Канбан</Link></li>
                                                <li><Link className={classes.submenuLink} to="/diagrams">Диаграммы</Link></li>
                                                <li><Link className={classes.submenuLink} to="/toDoList">Список задач</Link></li>
                                            </ul>
                                        ):null
                                }

                            </li>
                        </ul>
                        <ul>
                            {
                                isAuth
                                ?
                                    <div className={classes.userNavigation}>
                                        <li><Link className={classes.links} to="/profile">Профиль</Link></li>
                                        <li><Link className={classes.links} to="/"
                                        onClick={async () =>{
                                            await logoutUser();
                                            await setIsAuth(checkIsAuth());
                                        }
                                        }
                                        >Выйти</Link></li>
                                    </div>
                                :
                                    <div className={classes.userNavigation}>
                                        <li><Link className={classes.links} to="/login">Войти</Link></li>
                                        <li><Link className={classes.links} to="/register">Регистрация</Link></li>
                                    </div>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default NavBar;