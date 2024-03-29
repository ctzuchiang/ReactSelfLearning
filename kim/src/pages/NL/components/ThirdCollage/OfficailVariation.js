import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import DialogActionGroup from "../../../DialogActionGroup";
import ThirdCollageMenu from "./ThirdCollageMenu";

export default function OfficailVariation({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Officai variations</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <ThirdCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box flexGrow={1} display="flex" bgcolor="#FFDCBF" padding="56px 32px">
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
                            <Box display="flex" justifyContent="center" alignItems="center" width="23%">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "80%",
                                    }}
                                    src="/pic/NL/coat of arms/Image 4.png"
                                    alt=""
                                />
                            </Box>
                            <Box display="flex" justifyContent="center" alignItems="center" width="23%">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "80%",
                                    }}
                                    src="/pic/NL/coat of arms/Image 7.png"
                                    alt=""
                                />
                            </Box>
                            <Box display="flex" justifyContent="center" alignItems="center" width="23%">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "80%",
                                    }}
                                    src="/pic/NL/coat of arms/Image 5.png"
                                    alt=""
                                />
                            </Box>
                            <Box display="flex" justifyContent="center" alignItems="center" width="23%">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "80%",
                                    }}
                                    src="/pic/NL/coat of arms/Image 6.png"
                                    alt=""
                                />
                            </Box>
                        </Box>

                        <Box paddingTop="32px" display="flex" justifyContent="space-between">
                            <Box display="flex" width="23%">
                                <Typography
                                    style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0 }}
                                    align="center"
                                >
                                    The stylized version that is used as graphic identities by all government branches
                                </Typography>
                            </Box>
                            <Box display="flex" width="23%">
                                <Typography
                                    style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0 }}
                                    align="center"
                                >
                                    The simplified version that is used by states general (parliament).
                                </Typography>
                            </Box>
                            <Box display="flex" width="23%">
                                <Typography
                                    style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0 }}
                                    align="center"
                                >
                                    The simplified version that is used by senates.
                                </Typography>
                            </Box>
                            <Box display="flex" width="23%">
                                <Typography
                                    style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0 }}
                                    align="center"
                                >
                                    The simplified version that is used by the house of representatives.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("CoatOfArms")}
                    next={() => setDalogId("NoneOfficailVariation")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
