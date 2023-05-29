import React, {useContext, useState} from 'react';
import MySelect from "../components/UI/Select/MySelect";
import Section from "../components/mainPage/section";
import MyButton from "../components/UI/Button/MyButton";
import {AuthContext} from "../context/authContext";
import {useNavigate} from "react-router-dom";

const Main = () => {
    const {isAuth} = useContext(AuthContext);
    const router = useNavigate();
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Главная страница</h1>
            {
                !isAuth ?
                    (
                        <div style={{display: "flex", justifyContent:"center"}}>
                            <div>
                                <div style={{display: "flex", justifyContent:"center"}}>
                                    <h3>Авторизуйтесь для использования</h3>
                                    <MyButton style={{padding:10, margin: 10}}
                                              onClick={async () => {
                                                  await router("/login")
                                              }}
                                    >Войти</MyButton>
                                </div>
                                <div style={{display: "flex", justifyContent:"center"}}>
                                    <h3>Нет аккаунта?</h3>
                                    <MyButton style={{padding:15, margin: 10}}
                                              onClick={async () => {
                                                  await router("/register")
                                              }}
                                    >Зарегистрироваться</MyButton>
                                </div>
                            </div>
                        </div>
                    ) : null
            }

            <div>
                <Section
                    title={"Избавьтесь от бумажной волокиты"}
                    img={"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
                    imageAlt={"Много-много бумаги"}
                    description={"Подробное описание"}
                />
            </div>
            <div>
                <Section
                    title={"Планируйте"}
                    img={"https://plus.unsplash.com/premium_photo-1682126252712-1d98e031a71a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80\n"}
                    imageAlt={"Делай больше"}
                    description={"Подробное описание"}
                />
            </div>
            <div>
                <Section
                    title={"Делайте больше"}
                    img={"https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
                    imageAlt={"Делай больше"}
                    description={"Подробное описание"}
                />
            </div>
            <div>
                <Section
                    title={"Отдыхайте вовремя"}
                    img={"https://images.unsplash.com/photo-1505489304219-85ce17010209?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
                    imageAlt={"Делай больше"}
                    description={"Подробное описание"}
                />
            </div>

        </div>
    );
};
export default Main;