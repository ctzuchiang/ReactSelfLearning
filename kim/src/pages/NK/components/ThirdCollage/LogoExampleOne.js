import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import ThirdCollageMenu from "./ThirdCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function LogoExampleOne({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Logo do's and don'ts</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <ThirdCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent style={{ marginTop: "-28px" }}>
                <Box display="flex" bgcolor="#FDD1D3" padding="32px">
                    <Box
                        display="flex"
                        flexGrow={1}
                        borderRight="2px solid #094FA2"
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
                                        width: "350px",
                                        maxHeight: "350px",
                                    }}
                                    src="/pic/NK/LOGO/good_logo_one.png"
                                    alt=""
                                />
                            </Box>
                        </Box>

                        <Box paddingTop="16px">
                            <Typography style={{ color: "#094FA2", fontSize: "25px", WebkitTextStrokeWidth: 0 }}>
                                <b>Allowed</b>
                            </Typography>
                            <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                                <b>
                                    Big portraits with detailed expression and decorations. Suitable for our people to
                                    worship their leadership.
                               </b>
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
                                        width: "350px",
                                        maxHeight: "350px",
                                    }}
                                    src="/pic/NK/LOGO/bad_logo_one.png"
                                    alt=""
                                />
                            </Box>
                        </Box>
                        <Box paddingTop="16px">
                            <Typography style={{ color: "#094FA2", fontSize: "25px", WebkitTextStrokeWidth: 0 }}>
                                <b>Prohibited</b>
                            </Typography>
                            <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                                <b>
                                    Bad quality and small picture size. The essence of our leader is not significant
                                    enough with poor placement.
                               </b>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("Logo")}
                    next={() => setDalogId("LogoExampleTwo")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
