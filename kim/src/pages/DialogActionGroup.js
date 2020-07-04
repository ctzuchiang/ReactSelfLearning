import React from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CancelIcon from "@material-ui/icons/Cancel";
import { IconButton } from "@material-ui/core";

export default function DialogActionGroup({ previous, next, setShowDialog }) {
    return (
        <React.Fragment>
            <IconButton style={{ position: "absolute", left: "0%", top: "50%" }} onClick={previous}>
                <NavigateBeforeIcon fontSize="large" />
            </IconButton>
            <IconButton onClick={next} style={{ position: "absolute", right: "0%", top: "50%" }}>
                <NavigateNextIcon fontSize="large" />
            </IconButton>
            <IconButton onClick={() => setShowDialog(false)} style={{ position: "absolute", right: "0%", top: "0%" }}>
                <CancelIcon style={{ fontSize: "48px" }} />
            </IconButton>
        </React.Fragment>
    );
}
