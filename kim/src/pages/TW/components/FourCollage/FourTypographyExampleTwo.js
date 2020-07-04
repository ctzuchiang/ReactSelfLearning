import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import FourCollageMenu from "./FourCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function FourTypographyExampleTwo({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Typography Examples</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FourCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box
                    display="flex"
                    flexGrow={1}
                    justifyContent="space-between"
                    alignItems="center"
                    bgcolor="#D9F0EF"
                    padding="64px"
                >
                    <Box display="flex" width="50%" justifyContent="center" alignItems="center">
                        <img
                            src="/pic/TW/typography/3.png"
                            style={{
                                position: "relative",
                                width: "550px",
                            }}
                            alt=""
                        />
                    </Box>
                    <Box display="flex" width="50%" justifyContent="center" alignItems="center">
                        <img
                            src="/pic/TW/typography/2.png"
                            style={{
                                position: "relative",
                                width: "550px",
                            }}
                            alt=""
                        />
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("FourTypographyExample")}
                    next={() => setDalogId("ToneOfVoice")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
