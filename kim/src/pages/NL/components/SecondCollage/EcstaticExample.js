import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import DialogActionGroup from "../../../DialogActionGroup";
import SecondCollageMenu from "./SecondCollageMenu";

export default function EcstaticExample({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Ecstatic examples</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <SecondCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box display="flex" bgcolor="#FFDCBF" padding="32px">
                    <Box
                        display="flex"
                        flexGrow={1}
                        // borderRight="2px solid #094FA2"
                        width="50%"
                        maxWidth="50%"
                        paddingRight="32px"
                        flexDirection="column"
                    >
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Box display="flex" justifyContent="center" alignItems="center" width="100%">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "490px",
                                    }}
                                    src="/pic/NL/color/4.png"
                                    alt=""
                                />
                            </Box>
                        </Box>

                        <Box paddingTop="16px">
                            <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                                <b>Fans</b>
                            </Typography>
                            <Typography style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0 }}>
                                We like to use orange to represent us and show support to our sport teams. We are the
                                brightest orange bunch you will see in all kinds of events.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flexGrow={1}
                        width="50%"
                        maxWidth="50%"
                        paddingLeft="32px"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Box display="flex" justifyContent="center" alignItems="center" width="100%">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "400px",
                                        maxHeight: "400px",
                                    }}
                                    src="/pic/NL/color/5.png"
                                    alt=""
                                />
                            </Box>
                        </Box>
                        <Box paddingTop="16px">
                            <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                                <b>Food colouring</b>
                            </Typography>
                            <Typography style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0 }}>
                                When it’s queen’s or king’s day we go overboard with our colour and like to make
                                everything orange to feel the festivity.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("HappyExamples")}
                    next={() => setDalogId("ColorPallete")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
