import { Button, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { fontFamily } from "./fontFamily";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { linearGradiant } from "./linearGradiant";

export function TitleSection() {
    return (
        <Stack sx={{ width: "100vw", height: "70vh" }} direction={"column"}>
            <Box sx={{ margin: "auto" }}>
                <Typography
                    variant={"h2"}
                    sx={{ fontFamily: fontFamily, textAlign: "center", fontSize: "5rem", }}
                    paragraph
                >
                    <strong>Coding Cougs</strong>
                </Typography>
                <Typography variant={"h5"} sx={{ fontFamily: fontFamily, textAlign: "center" }}>
                    @ Washington State University Tri-Cities
                </Typography>
                <Stack direction={"row"} justifyContent={"center"} sx={{padding: '1.5rem'}}>
                    <Button
                        endIcon={<KeyboardArrowRightIcon />}
                        sx={{
                            color: "#fff",
                            background: linearGradiant,
                            fontFamily: fontFamily,
                        }}
                        size={"large"}
                    >
                        Sign Up
                    </Button>
                </Stack>
            </Box>
        </Stack>
    );
}
