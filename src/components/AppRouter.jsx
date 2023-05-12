import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {ForAuthRoutes} from "./routers/routers";

const AppRouter = () => {
    return (
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
    );
};

export default AppRouter;