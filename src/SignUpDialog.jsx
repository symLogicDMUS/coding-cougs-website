import React from "react";
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormGroup,
    Select,
    Stack,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import * as PropTypes from "prop-types";
import { useStyles } from "./SignUpDialog.jss";

export function SignUpDialog({open, onBackdropClick}) {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <Dialog
            open={open}
            sx={{
                "& .MuiDialogContent-root": {
                    paddingTop: theme.spacing(3)
                }
            }}
            onBackdropClick={onBackdropClick}
        >
            <DialogTitle>
                <Typography variant={"h5"}>
                    <strong>Sign Up</strong>
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Stack spacing={{ xs: 1, sm: 2, md: 3 }} mb={4}>
                    <FormGroup sx={{ marginBottom: theme.spacing(2) }}>
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={{ xs: 1, sm: 2, md: 3 }}
                            mb={{ xs: 1, sm: 2, md: 3 }}
                            flexWrap={true}
                        >
                            <TextField label={"First Name"} />
                            <TextField label={"Last Name"} />
                        </Stack>
                        <TextField label={"Preferred Name"} fullWidth />
                    </FormGroup>
                    <TextField label={"WSU Email"} fullWidth />
                    <Select label={"Major"} fullWidth />
                </Stack>
                <Button variant={"contained"} color={"primary"} fullWidth>
                    Sign Up
                </Button>
            </DialogContent>
        </Dialog>
    );
}

SignUpDialog.propTypes = {
    open: PropTypes.bool,
    onBackdropClick: PropTypes.func,
};
