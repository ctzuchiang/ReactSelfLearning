import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box, DialogContentText } from "@material-ui/core";
import FiveCollageMenu from "./FiveCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function Grooming({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Grooming</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FiveCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent style={{ marginTop: "-38px" }}>
                <Box maxWidth="50%" paddingBottom="8px">
                    <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                        <b>
                            We trim our hair in accordance with our socialist lifestyle, we practice equality every time
                            we go to the hairdresser. Woman and man only have the right to choose from 15 different
                            hairstyles, We have to be equal and obey the rules
                        </b>
                    </DialogContentText>
                </Box>
                <Box
                    padding="48px 64px"
                    marginTop="-12px"
                    bgcolor="#FDD1D3"
                    display="flex"
                    flexGrow={1}
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Box display="flex" flexGrow={1} justifyContent="space-between">
                        <Box display="flex" width="45%" justifyContent="center">
                            <img style={{ position: "relative", width: "100%" }} src="/pic/NK/attire/6.png" alt="" />
                        </Box>
                        <Box
                            display="flex"
                            width="45%"
                            justifyContent="center"
                            flexDirection="column"
                            alignItems="center"
                        >
                            <img
                                style={{ position: "relative", width: "100%", paddingBottom: "12px" }}
                                src="/pic/NK/attire/5.png"
                                alt=""
                            />
                            <Typography style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0 }}>
                                *men over 50 may grow their hair length to 7cm on top to hide their bald spots.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("PropperAttire")}
                    next={() => setDalogId("ToneOfVoice")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
