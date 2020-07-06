import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import FourCollageMenu from "./FourCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function SanSerifExampleTwo({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Serif example</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FourCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box display="flex" bgcolor="#FDD1D3" padding="64px" justifyContent="center">
                    <img
                        style={{
                            position: "relative",
                            width: "82%",
                        }}
                        src="/pic/NK/typo/typo1.png"
                        alt=""
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("SanSerifExampleOne")}
                    next={() => setDalogId("FourTypography")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
