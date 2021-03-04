import {Box, Button, Container, Grid} from "@material-ui/core";
import '../App.css'

const Loader = () => {
    return (
        <Container>
            <Grid container alignItems={'center'} justify={'center'}>

                <Grid container alignItems={'center'}
                      direction={"column"}>
                    <div className="lds-hourglass"></div>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Loader;