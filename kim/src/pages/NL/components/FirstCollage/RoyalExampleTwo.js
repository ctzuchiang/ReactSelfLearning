import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import DialogActionGroup from "../../../DialogActionGroup";
import FirstCollageMenu from "./FirstCollageMenu";

export default function RoyalExampleTwo({ dalogId, setDalogId, setShowDialog }) {
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
                        <FirstCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent style={{ marginTop: "-28px" }}>
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
                                        width: "350px",
                                        height: "350px",
                                    }}
                                    src="/pic/NL/monarchy/IMG_0063@2x.png"
                                    alt=""
                                />
                            </Box>
                        </Box>

                        <Box paddingTop="16px">
                            <Typography
                                style={{ color: "#094FA2", fontSize: "25px", WebkitTextStrokeWidth: 0 }}
                                align="center"
                            >
                                <b>Dutch example</b>
                            </Typography>
                            <Typography
                                style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}
                                align="center"
                            >
                                <b>
                                    women can be the reigning monarch, too, and abdicate when she or he feels like it.
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
                            <Box width="100%" display="flex" justifyContent="center" alignItems="center">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "350px",
                                        maxHeight: "350px",
                                    }}
                                    src="/pic/NL/monarchy/tennou@2x.png"
                                    alt=""
                                />
                            </Box>
                        </Box>
                        <Box paddingTop="16px">
                            <Typography
                                style={{ color: "#094FA2", fontSize: "25px", WebkitTextStrokeWidth: 0 }}
                                align="center"
                            >
                                <b>non-Dutch example</b>
                            </Typography>
                            <Typography
                                style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}
                                align="center"
                            >
                                <b>No male no kingdom, and a lifetime duty to be the spiritual leader of all.</b>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("RoyalExampleOne")}
                    next={() => setDalogId("Value")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
