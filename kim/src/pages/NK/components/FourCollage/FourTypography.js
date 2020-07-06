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
                            Our mono-culture and leadership have to reflect on the written format as well. By only using
                            Chosongul script, we have to deliver our leader’s message and emotion across to every member
                            of the community.
                        </b>
                    </DialogContentText>
                </Box>
                <Box
                    display="flex"
                    height="25vh"
                    justifyContent="center"
                    bgcolor="#FDD1D3"
                    padding="96px"
                    marginTop="24px"
                    alignItems="center"
                >
                    <Box>
                        <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                            <b>Our typography has to be</b>
                        </DialogContentText>
                        <DialogContentText style={{ color: "#094FA2", fontSize: "60px" }}>
                            <b>bold, provocative, dynamic</b>
                        </DialogContentText>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("SanSerifExampleTwo")}
                    next={() => setDalogId("SanSerifExampleOne")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
