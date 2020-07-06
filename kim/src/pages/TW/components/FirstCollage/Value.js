import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, DialogContentText, Box } from "@material-ui/core";
import FirstCollageMenu from "./FirstCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function Value({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Our Value</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FirstCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box maxWidth="50%">
                    <DialogContentText style={{ color: "#094FA2", fontSize: "20px", lineHeight: 1.4 }}>
                        <b>
                            We probably stand by democracy and freedom with our sovereignty, but We haven’t reached a
                            concrete agreement yet. The ramification from the past is still confusing our mind, and not
                            everyone approves what they see. Maybe ask us again, because the answer might
                            change—Inauguration speech from different presidents.
                        </b>
                    </DialogContentText>
                    <Typography
                        style={{
                            color: "#094FA2",
                            fontSize: "30px",
                            WebkitTextStrokeWidth: 0,
                            padding: "12px 0px 32px 0px",
                        }}
                    >
                        <b>Our Decolonization</b>
                    </Typography>
                </Box>
                <Box display="flex" flexGrow={1} justifyContent="center" padding="0px 32px">
                    <Box display="flex" width="98%" justifyContent="space-between">
                        <Box display="flex" flexDirection="column">
                            <Box maxWidth="70%">
                                <img style={{ position: "relative", width: "100%" }} src="/pic/TW/map/1.png" alt="" />
                            </Box>
                            <Box
                                paddingTop="48px"
                                display="flex"
                                flexGrow={1}
                                justifyContent="center"
                                alignItems="flex-end"
                            >
                                <Typography
                                    style={{
                                        color: "#094FA2",
                                        fontSize: "20px",
                                        WebkitTextStrokeWidth: 0,
                                        lineHeight: "3rem",
                                    }}
                                    align="center"
                                >
                                    <b>Netherlands and Spain</b>
                                    <br />
                                    <b>1624-1662</b>
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Box maxWidth="70%">
                                <img style={{ position: "relative", width: "100%" }} src="/pic/TW/map/2.png" alt="" />
                            </Box>
                            <Box display="flex" flexGrow={1} justifyContent="center" alignItems="flex-end">
                                <Typography
                                    style={{
                                        color: "#094FA2",
                                        fontSize: "20px",
                                        WebkitTextStrokeWidth: 0,
                                        lineHeight: "3rem",
                                    }}
                                    align="center"
                                >
                                    <b>Tung-ing and Qing Dynasty</b>
                                    <br />
                                    <b>1662-1895</b>
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Box maxWidth="70%">
                                <img style={{ position: "relative", width: "100%" }} src="/pic/TW/map/3.png" alt="" />
                            </Box>
                            <Box display="flex" flexGrow={1} justifyContent="center" alignItems="flex-end">
                                <Typography
                                    style={{
                                        color: "#094FA2",
                                        fontSize: "20px",
                                        WebkitTextStrokeWidth: 0,
                                        lineHeight: "3rem",
                                    }}
                                    align="center"
                                >
                                    <b>Japan</b>
                                    <br />
                                    <b>1895-1945</b>
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Box maxWidth="70%">
                                <img style={{ position: "relative", width: "100%" }} src="/pic/TW/map/4.png" alt="" />
                            </Box>
                            <Box display="flex" flexGrow={1} justifyContent="center" alignItems="flex-end">
                                <Typography
                                    style={{
                                        color: "#094FA2",
                                        fontSize: "20px",
                                        WebkitTextStrokeWidth: 0,
                                        lineHeight: "3rem",
                                    }}
                                    align="center"
                                >
                                    <b>Republic of China</b>
                                    <br />
                                    <b>1945-1988</b>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("EntertainmentValue")}
                    next={() => setDalogId("Entertainments")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
