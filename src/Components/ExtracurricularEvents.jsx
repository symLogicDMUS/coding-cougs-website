import React from "react";
import { Stack, Typography } from "@mui/material";
import { fontFamily } from "./fontFamily";
import { linearGradiant } from "./linearGradiant";
import { useTheme } from "@mui/material";

export function ExtracurricularEvents() {
    const theme = useTheme();
    return (
        <Stack
            sx={{
                width: "50vw",
                height: "50vh",
                background: theme.palette.background.paper,
            }}
            direction={"column"}
        >
            <Typography
                variant={"h5"}
                sx={{ margin: "auto" }}
                style={{
                    fontFamily: fontFamily,
                    color: theme.palette.primary.main,
                }}
            >
                <strong>Extracurricular Events</strong>
            </Typography>
        </Stack>
    );
}
