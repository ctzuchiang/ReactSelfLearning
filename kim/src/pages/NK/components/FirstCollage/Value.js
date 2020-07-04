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
                            The great leader is the impeccable brain of our living body, and the party is our nerves.
                            The leader and the party are giving us life in exchange for loyalty. Without them, we become
                            dead bodies without legs and arms. —The Juche
                       </b>
                    </DialogContentText>
                    <Typography
                        style={{
                            color: "#094FA2",
                            fontSize: "30px",
                            WebkitTextStrokeWidth: 0,
                            padding: "12px 0px",
                        }}
                    >
                        <b>Our Revolution</b>
                    </Typography>
                </Box>
                <Box display="flex" flexGrow={1} justifyContent="center" padding="0px 32px">
                    <Box display="flex" width="80%" justifyContent="space-between">
                        <Box display="flex" flexDirection="column">
                            <Box>
                                <img style={{ position: "relative" }} src="/pic/NK/value/value_1.png" alt="" />
                            </Box>
                            <Box display="flex" flexGrow={1} justifyContent="center" alignItems="flex-end">
                                <Typography
                                    style={{
                                        color: "#094FA2",
                                        fontSize: "25px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    <b>Jun.1950</b>
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Box>
                                <img style={{ position: "relative" }} src="/pic/NK/value/value_2.png" alt="" />
                            </Box>
                            <Box display="flex" flexGrow={1} justifyContent="center" alignItems="flex-end">
                                <Typography
                                    style={{
                                        color: "#094FA2",
                                        fontSize: "25px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    <b>Sep.1950</b>
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Box>
                                <img style={{ position: "relative" }} src="/pic/NK/value/value_3.png" alt="" />
                            </Box>
                            <Box display="flex" flexGrow={1} justifyContent="center" alignItems="flex-end">
                                <Typography
                                    style={{
                                        color: "#094FA2",
                                        fontSize: "25px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    <b>Dec.1950</b>
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Box>
                                <img style={{ position: "relative" }} src="/pic/NK/value/value_4.png" alt="" />
                            </Box>
                            <Box display="flex" flexGrow={1} justifyContent="center" alignItems="flex-end">
                                <Typography
                                    style={{
                                        color: "#094FA2",
                                        fontSize: "25px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    <b>1953 till Now</b>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("Advancement")}
                    next={() => setDalogId("Socialism")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
