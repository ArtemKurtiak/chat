import {AppBar, Button, Grid, Toolbar} from "@material-ui/core";
import {LOGIN_PAGE} from "../consts";
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    return (
        <AppBar color={'secondary'} position="static">
            <Toolbar variant={"dense"}>
                <Grid container justify={'flex-end'}>
                    {user ?
                        <Button onClick={() => auth.signOut()}>Log Out</Button>
                        :
                        <NavLink to={LOGIN_PAGE}>
                            <Button>Log In</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;