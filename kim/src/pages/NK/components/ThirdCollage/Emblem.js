import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, DialogContentText, Box } from "@material-ui/core";
import ThirdCollageMenu from "./ThirdCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function Emblem({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Emblem</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <ThirdCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box display="flex">
                    <Box flexGrow={1} width="50%" maxWidth="50%" marginRight="12px">
                        <Box>
                            <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                                <b>
                                    Our great leader created this original masterpiece. This symbol is showing how
                                    devoted Mount Baekdu bloodlines’ are to our people. We have to be forever grateful
                                    for this socialist utopia, the great leader created.
                                </b>
                            </DialogContentText>
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        marginBottom="8px"
                        bgcolor="#FDD1D3"
                        flexGrow={1}
                        width="50%"
                        maxWidth="50%"
                        marginLeft="12px"
                        alignItems="center"
                    >
                        <Box display="flex" padding="24px 64px" justifyContent="center" flexGrow={1}>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <img
                                    style={{
                                        paddingBottom: "16px",
                                        position: "relative",
                                        width: "60%",
                                        maxHeight: "320px",
                                    }}
                                    src="/pic/NK/emblem/emblem.png"
                                    alt=""
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Typography
                    style={{
                        color: "#094FA2",
                        fontSize: "20px",
                        WebkitTextStrokeWidth: 0,
                    }}
                >
                    <b>How to use</b>
                </Typography>
                <Box display="flex" flexGrow={1} justifyContent="space-between">
                    <Box width="25%" maxWidth="25%" paddingRight="20px">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            1. This emblem is reminding us of our socialist roots, and that Mount Baekdu bloodline is
                            still granting us prosperity and progress in our society.
                        </Typography>
                    </Box>
                    <Box width="25%" maxWidth="25%" paddingRight="20px">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            2. Peasants and commoners are forbidden to use this emblem. Only highest-ranking officers
                            can receive the honor to use this logo.
                        </Typography>
                    </Box>
                    <Box width="25%" maxWidth="25%" paddingRight="20px">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            3. Important buildings and state institutions must place our emblem in visible places.
                        </Typography>
                    </Box>
                    <Box width="25%" maxWidth="25%">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            4. Only use this logo when there is not enough space for our great leaders. However, that is
                            rarely the case, we have to make space for the most valuable assets in our country.
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("LogoExampleTwo")}
                    next={() => setDalogId("EmblemExample")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
