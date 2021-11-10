import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(
    (theme) => ({
        dialog: {
            "& .MuiDialogContent-root": {
                paddingTop: theme.spacing(3),
            },
        },
    }),
    { index: 1 }
);
