import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, DialogContentText, Box } from "@material-ui/core";
import FourCollageMenu from "./FourCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function FourTypography({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Typography</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FourCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box maxWidth="50%">
                    <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                        <b>
                            We prefer to learn the subject matters because we have the right and ability to choose and
                            think for ourselves. The message we received from others might not be neutral or objective,
                            but their goal should be clear to us and does not instigate unnecessary prejudgments.
                        </b>
                    </DialogContentText>
                </Box>
                <Box display="flex" justifyContent="center" bgcolor="#FFDCBF" padding="96px" marginTop="24px">
                    <Box>
                        <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                            <b>Our typography is</b>
                        </DialogContentText>
                        <DialogContentText style={{ color: "#094FA2", fontSize: "60px" }}>
                            <b>inoformative, autonomous, objective</b>
                        </DialogContentText>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("ToneOfVoice")}
                    next={() => setDalogId("ToneOfVoice")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
