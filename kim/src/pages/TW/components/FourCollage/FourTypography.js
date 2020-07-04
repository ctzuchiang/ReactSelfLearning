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
                            The way we write is also packed with uncertainty. There are so many ideas to choose from,
                            and we find it hard to make reliable decisions without being emotional. The aftermath of
                            visual explosions is what we are looking for, and it translates our thinking process with
                            complex nuances.
                        </b>
                    </DialogContentText>
                </Box>
                <Box display="flex" justifyContent="center" bgcolor="#D9F0EF" padding="96px" marginTop="24px">
                    <Box>
                        <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                            <b>Our typography should be</b>
                        </DialogContentText>
                        <DialogContentText style={{ color: "#094FA2", fontSize: "60px" }}>
                            <b>chaotic, dense, overwhelming</b>
                        </DialogContentText>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("ToneOfVoice")}
                    next={() => setDalogId("FourTypographyExample")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
