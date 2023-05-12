import Main from "../../pages/Main";
import DailyPlanner from "../../pages/dailyPlanner";
import Pomodoro from "../../pages/Pomodoro";
import KanbanDesk from "../../pages/KanbanDesk";
import Diagrams from "../../pages/Diagrams";
import ToDoList from "../../pages/ToDoList";
import Logout from "../../pages/Logout";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";

export const ForAuthRoutes = [
    {path: '/', element: <Main/>, exact: true},
    {path: '/dailyPlanner', element: <DailyPlanner/>, exact: true},
    {path: '/timer', element: <Pomodoro/>, exact: true},
    {path: '/kanbanDesks', element: <KanbanDesk/>, exact: true},
    {path: '/diagrams', element: <Diagrams/>, exact: true},
    {path: '/toDoList', element: <ToDoList/>, exact: true},
    {path: '/logout', element: <Logout/>, exact: true}
]

export const NotAuthRoutes = [
    {path: '/', element: <Main/>, exact: true},
    {path: '/login', element: <Login/>, exact: true},
    {path: '/register', element: <Registration/>, exact: true}
]