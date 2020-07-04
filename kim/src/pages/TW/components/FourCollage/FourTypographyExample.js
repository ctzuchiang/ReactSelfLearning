import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import FourCollageMenu from "./FourCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function FourTypographyExample({ dalogId, setDalogId, setShowDialog }) {
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
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="#D9F0EF"
                    padding="64px"
                >
                    <Box>
                        <img
                            src="/pic/TW/typography/1.png"
                            style={{
                                position: "relative",
                                width: "700px",
                            }}
                            alt=""
                        />
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("FourTypography")}
                    next={() => setDalogId("FourTypographyExampleTwo")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
