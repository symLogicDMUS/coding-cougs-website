import { Button, Stack, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { fontFamily } from "./fontFamily";
import React, { useContext } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { linearGradiant } from "./linearGradiant";
import { AppContext } from "../AppContext";

export function TitleSection({ openSignUp }) {
    const theme = useTheme();
    const { context, dispatch } = useContext(AppContext);
    const textColor = context.isDarkMode ? "#000" : "#fff";
    return (
        <Stack
            sx={{
                width: "100vw",
                height: "70vh",
                backgroundColor: theme.palette.background.default,
            }}
            direction={"column"}
        >
            <Box sx={{ margin: "auto" }}>
                <Typography
                    variant={"h2"}
                    sx={{
                        fontFamily: fontFamily,
                        textAlign: "center",
                        fontSize: "5rem",
                        color: textColor,
                    }}
                    paragraph
                >
                    <strong>Coding Cougs</strong>
                </Typography>
                <Typography
                    variant={"h5"}
                    sx={{
                        fontFamily: fontFamily,
                        textAlign: "center",
                        color: textColor,
                    }}
                >
                    @ Washington State University Tri-Cities
                </Typography>
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    sx={{ padding: "1.5rem" }}
                >
                    <Button
                        endIcon={<KeyboardArrowRightIcon />}
                        sx={{
                            color: "#fff",
                            background: linearGradiant,
                            fontFamily: fontFamily,
                        }}
                        size={"large"}
                        onClick={openSignUp}
                    >
                        Sign Up
                    </Button>
                </Stack>
            </Box>
        </Stack>
    );
}
