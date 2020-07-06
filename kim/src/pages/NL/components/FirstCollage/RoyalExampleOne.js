import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import DialogActionGroup from "../../../DialogActionGroup";
import FirstCollageMenu from "./FirstCollageMenu";

export default function RoyalExampleOne({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Monarchy references</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FirstCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
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
                                        width: "400px",
                                        maxHeight: "400px",
                                    }}
                                    src="/pic/NL/monarchy/Rectangle 244@2x.png"
                                    alt=""
                                />
                            </Box>
                        </Box>

                        <Box paddingTop="16px">
                            <Typography
                                style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}
                                align="center"
                            >
                                <b>Our Example</b>
                            </Typography>
                            <Typography
                                style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0 }}
                                align="center"
                            >
                                No crown is better, chicer and friendlier.
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
                                    src="/pic/NL/monarchy/Rectangle 243@2x.png"
                                    alt=""
                                />
                            </Box>
                        </Box>
                        <Box paddingTop="16px">
                            <Typography
                                style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}
                                align="center"
                            >
                                <b>Other Example</b>
                            </Typography>
                            <Typography
                                style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0 }}
                                align="center"
                            >
                                Jewelry is a must, things that show the royal status necessary on many occasions.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("Monarchy")}
                    next={() => setDalogId("RoyalExampleTwo")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
