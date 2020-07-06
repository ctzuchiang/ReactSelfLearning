import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import ThirdCollageMenu from "./ThirdCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function EmblemExample({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Emblem example</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <ThirdCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
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
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Box width="100%" paddingRight="8px">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "350px",
                                        // maxHeight: "350px",
                                    }}
                                    src="/pic/NK/emblem/passport.png"
                                    alt=""
                                />
                            </Box>
                            <Box width="100%" paddingLeft="8px">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "320px",
                                        maxHeight: "450px",
                                    }}
                                    src="/pic/NK/emblem/passport2.png"
                                    alt=""
                                />
                            </Box>
                        </Box>

                        <Box paddingTop="16px">
                            <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                                <b>Official Documents</b>
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "15px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                            >
                                passports
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
                        // alignItems="center"
                    >
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Box width="80%" display="flex" justifyContent="center" alignItems="center">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "500px",
                                        maxHeight: "450px",
                                    }}
                                    src="/pic/NK/emblem/embassy.png"
                                    alt=""
                                />
                            </Box>
                        </Box>
                        <Box paddingTop="16px">
                            <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                                <b>Signage</b>
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "15px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                            >
                                Embassy main entrance
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("Emblem")}
                    next={() => setDalogId("Landmarks")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
