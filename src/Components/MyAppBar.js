import {AppBar, Button, Stack, Toolbar} from "@mui/material";

import makeStyles from "@mui/styles/makeStyles";
import {fontFamily} from "./fontFamily";

export const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiButton-root": {
            fontFamily: fontFamily
        },
    }
}), { index: 1 });

export function MyAppBar() {
    const classes = useStyles();
    return (
        <AppBar sx={{ background: "#fff" }} position={"static"} className={classes.root}>
            <Toolbar>
                <img
                    src={"/Images/CC.png"}
                    style={{ width: 36, height: 36, marginRight: "auto" }}
                    alt={"CC logo"}
                />
                <Stack spacing={2} direction={"row"}>
                    <Button>About us</Button>
                    <Button>Events</Button>
                    <Button variant={"outlined"}><strong>Contact us</strong></Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
