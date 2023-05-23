import Main from "../../pages/Main";
import DailyPlanner from "../../pages/dailyPlanner";
import Pomodoro from "../../pages/Pomodoro";
import KanbanDesk from "../../pages/KanbanDesk";
import Diagrams from "../../pages/Diagrams";
import ToDoList from "../../pages/ToDoList";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import Profile from "../../pages/Profile";
import VerifyMail from "../auth/VerifyMail";

export const ForAuthRoutes = [
    {path: '/', element: <Main/>, exact: true},
    {path: '/dailyPlanner', element: <DailyPlanner/>, exact: true},
    {path: '/timer', element: <Pomodoro/>, exact: true},
    {path: '/kanbanDesks', element: <KanbanDesk/>, exact: true},
    {path: '/diagrams', element: <Diagrams/>, exact: true},
    {path: '/toDoList', element: <ToDoList/>, exact: true},
    {path: '/profile', element: <Profile/>, exact: true},
    {path: '/verifyMail', element: <VerifyMail/>, exact: true}
]

export const NotAuthRoutes = [
    {path: '/', element: <Main/>, exact: true},
    {path: '/login', element: <Login/>, exact: true},
    {path: '/register', element: <Registration/>, exact: true},
    {path: '/verifyMail', element: <VerifyMail/>, exact: true}
]