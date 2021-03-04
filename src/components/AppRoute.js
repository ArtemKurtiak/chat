import { Switch, Route, Redirect } from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../routes";
import {CHAT_PAGE, LOGIN_PAGE} from "../consts";
import {useAuthState} from 'react-firebase-hooks/auth';
import {useContext} from "react";
import {Context} from "../index";

const AppRoute = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                <Redirect to={CHAT_PAGE} />
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                <Redirect to={LOGIN_PAGE} />
            </Switch>
        )
}
export default AppRoute;