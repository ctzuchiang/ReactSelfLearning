import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import FiveCollageMenu from "./FiveCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function WeatherExample({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Weather example</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FiveCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent style={{ marginTop: "-28px" }}>
                <Box display="flex" bgcolor="#FFDCBF" padding="32px">
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
                                        width: "500px",
                                        maxHeight: "500px",
                                    }}
                                    src="/pic/NL/weather/good weather@2x.png"
                                    alt=""
                                />
                            </Box>
                        </Box>

                        <Box paddingTop="16px">
                            <Typography style={{ color: "#094FA2", fontSize: "25px", WebkitTextStrokeWidth: 0 }}>
                                <b>Good weather</b>
                            </Typography>
                            <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                                <b>
                                    Ca. 15 degrees and above. Light breeze and fresh air create a comfortable condition
                                    for biking.
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
                                        width: "500px",
                                        maxHeight: "500px",
                                    }}
                                    src="/pic/NL/weather/wind-2@2x.png"
                                    alt=""
                                />
                            </Box>
                        </Box>
                        <Box paddingTop="16px">
                            <Typography style={{ color: "#094FA2", fontSize: "25px", WebkitTextStrokeWidth: 0 }}>
                                <b>Bad weather</b>
                            </Typography>
                            <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                                <b>
                                    Ca. 15 degrees and above. Light breeze and fresh air create a comfortable condition
                                    for biking.
                                </b>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("Weather")}
                    next={() => setDalogId("Frugality")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
