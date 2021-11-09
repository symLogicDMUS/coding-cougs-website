import "./App.css";
import { CssBaseline, Stack } from "@mui/material";
import { MyAppBar } from "./Components/MyAppBar";
import { TitleSection } from "./Components/TitleSection";
import MiniCodeEditor from "./Components/MiniCodeEditor";
import { HackathonPhoto } from "./Components/HackathonPhoto";
import { ExtracurricularEvents } from "./Components/ExtracurricularEvents";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
    const theme = createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: "#F83346",
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MyAppBar />
            <Stack direction={"row"}>
                <TitleSection />
            </Stack>
            <Stack direction={"row"}>
                <ExtracurricularEvents />
                <HackathonPhoto />
            </Stack>
            <MiniCodeEditor />
        </ThemeProvider>
    );
}

export default App;
