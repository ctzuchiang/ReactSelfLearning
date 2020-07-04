import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import DialogActionGroup from "../../../DialogActionGroup";
import ThirdCollageMenu from "./ThirdCollageMenu";

export default function NoneOfficailVariation({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>None officai logo variation</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <ThirdCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent style={{ marginTop: "-28px" }}>
                <Box display="flex" bgcolor="#FFDCBF" padding="96px">
                    <Box
                        display="flex"
                        flexGrow={1}
                        // borderRight="2px solid #094FA2"
                        width="100%"
                        maxWidth="100%"
                        paddingRight="32px"
                        flexDirection="column"
                    >
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Box display="flex" justifyContent="center" alignItems="center" width="30%">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "60%",
                                    }}
                                    src="/pic/NL/coat of arms/Image 45@2x.png"
                                    alt=""
                                />
                            </Box>
                            <Box display="flex" justifyContent="center" alignItems="center" width="40%">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "100%",
                                    }}
                                    src="/pic/NL/coat of arms/Rectangle 247@2x.png"
                                    alt=""
                                />
                            </Box>
                            <Box display="flex" justifyContent="center" alignItems="center" width="30%">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "60%",
                                    }}
                                    src="/pic/NL/coat of arms/shirt@2x.png"
                                    alt=""
                                />
                            </Box>
                        </Box>

                        <Box paddingTop="32px" display="flex" justifyContent="space-between">
                            <Box display="flex" width="30%" justifyContent="center">
                                <Typography
                                    style={{ color: "#094FA2", fontSize: "18px", WebkitTextStrokeWidth: 0 }}
                                    align="center"
                                >
                                    <b>For tattoo</b>
                                </Typography>
                            </Box>
                            <Box display="flex" width="40%" justifyContent="center">
                                <Typography
                                    style={{ color: "#094FA2", fontSize: "18px", WebkitTextStrokeWidth: 0 }}
                                    align="center"
                                >
                                    <b>For national team supporters</b>
                                </Typography>
                            </Box>
                            <Box display="flex" width="30%" justifyContent="center">
                                <Typography
                                    style={{ color: "#094FA2", fontSize: "18px", WebkitTextStrokeWidth: 0 }}
                                    align="center"
                                >
                                    <b>For souvenirs</b>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("OfficailVariation")}
                    next={() => setDalogId("CoatOfArms")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
