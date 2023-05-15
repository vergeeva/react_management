import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {ForAuthRoutes, NotAuthRoutes} from "./routers/routers";
import {AuthContext} from "../context/authContext";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    return (
        isAuth
        ?
        <div>
            <Routes>
                {
                    ForAuthRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                        key={route.path}
                    />
                    )
                }
                <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
            :
            <div>
                <Routes>
                    {
                        NotAuthRoutes.map(route =>
                            <Route
                                path={route.path}
                                element={route.element}
                                exact={route.exact}
                                key={route.path}
                            />
                        )
                    }
                    <Route path="/*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>

    );
};

export default AppRouter;