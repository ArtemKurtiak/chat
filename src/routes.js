import {CHAT_PAGE, LOGIN_PAGE} from "./consts";
import Login from "./components/Login";
import Chat from "./components/Chat";

export const publicRoutes = [
    {
        path: LOGIN_PAGE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: CHAT_PAGE,
        Component: Chat
    }
]