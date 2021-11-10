import "./App.css";
import React, { useMemo, useReducer, useState } from "react";
import { MyAppBar } from "./Components/MyAppBar";
import { CssBaseline, Stack } from "@mui/material";
import { TitleSection } from "./Components/TitleSection";
import MiniCodeEditor from "./Components/MiniCodeEditor";
import { HackathonPhoto } from "./Components/HackathonPhoto";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ExtracurricularEvents } from "./Components/ExtracurricularEvents";
import { appDefaultContext } from "./appDefaultContext";
import { SignUpDialog } from "./SignUpDialog";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";
import { reducer } from "./App.red";
import { AppContext } from "./AppContext";

function App() {
    const [context, dispatch] = useReducer(reducer, appDefaultContext);

    const theme = useMemo(
        () =>
            context.isDarkMode
                ? createTheme(darkTheme)
                : createTheme(lightTheme),
        [context.isDarkMode]
    );

    const [signUpDialog, setSignUpDialog] = useState(false);

    return (
        <AppContext.Provider value={{ context, dispatch }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <SignUpDialog
                    open={signUpDialog}
                    onBackdropClick={() => setSignUpDialog(false)}
                />
                <MyAppBar />
                <Stack direction={"row"}>
                    <TitleSection openSignUp={() => setSignUpDialog(true)} />
                </Stack>
                <Stack direction={"row"}>
                    <ExtracurricularEvents />
                    <HackathonPhoto />
                </Stack>
                <MiniCodeEditor />
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
