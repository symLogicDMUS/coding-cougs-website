import {
    AppBar,
    Button,
    IconButton,
    Stack,
    Toolbar,
    Tooltip,
    useTheme,
} from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useStyles } from "./MyAppBar.jss";

export function MyAppBar() {
    const classes = useStyles();
    const theme = useTheme();
    const { context, dispatch } = useContext(AppContext);
    return (
        <AppBar
            sx={{ background: context.isDarkMode ? "#000" : "#fff" }}
            position={"static"}
            className={classes.root}
        >
            <Toolbar>
                <img
                    src={"/Images/CC.png"}
                    style={{ width: 36, height: 36, marginRight: "auto" }}
                    alt={"CC logo"}
                />
                <Stack spacing={2} direction={"row"}>
                    <Tooltip title={"Toggle light/dark theme"}>
                        <IconButton
                            onClick={() =>
                                dispatch({
                                    type: "update-mode",
                                    isDarkMode: !context.isDarkMode,
                                })
                            }
                            sx={{
                                color: theme.palette.primary.main,
                            }}
                            size="large"
                        >
                            {context.isDarkMode ? (
                                <Brightness7Icon />
                            ) : (
                                <Brightness4Icon />
                            )}
                        </IconButton>
                    </Tooltip>
                    <Button>About us</Button>
                    <Button>Events</Button>
                    <Button variant={"outlined"}>
                        <strong>Contact us</strong>
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
