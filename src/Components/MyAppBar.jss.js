import makeStyles from "@mui/styles/makeStyles";
import { fontFamily } from "./fontFamily";

export const useStyles = makeStyles(
    (theme) => ({
        root: {
            "& .MuiButton-root": {
                fontFamily: fontFamily,
            },
        },
    }),
    { index: 1 }
);
