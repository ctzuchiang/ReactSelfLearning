import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, DialogContentText, Box } from "@material-ui/core";
import FourCollageMenu from "./FourCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function Holidays({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Holidays</b>
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
                        <b>xxxxxxxxxxxx</b>
                    </DialogContentText>
                    <Typography
                        style={{
                            color: "#094FA2",
                            fontSize: "30px",
                            WebkitTextStrokeWidth: 0,
                            padding: "12px 0px",
                        }}
                    >
                        <b>XXXXXXXXXXXX</b>
                    </Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("SanSerifExampleTwo")}
                    next={() => setDalogId("FourTypography")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
