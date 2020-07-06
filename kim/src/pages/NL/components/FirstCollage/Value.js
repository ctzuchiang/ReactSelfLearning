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
                            Every member of our community shares the same right and responsibilities. We are open-minded
                            and can think, say, and do what we want, but we also know to respect the differences in
                            religion, culture, or different opinions.
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
                        <b>Our Reclamation</b>
                    </Typography>
                </Box>
                <Box display="flex" flexGrow={1} justifyContent="center" padding="0px 32px">
                    <Box display="flex" width="100%" justifyContent="space-between">
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Box maxWidth="70%">
                                <img
                                    style={{ position: "relative", width: "100%" }}
                                    src="/pic/NL/Value/1300_1500.png"
                                    alt=""
                                />
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
                                        fontSize: "25px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    <b>1300-1500</b>
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Box maxWidth="70%">
                                <img
                                    style={{ position: "relative", width: "100%" }}
                                    src="/pic/NL/Value/1500_1700.png"
                                    alt=""
                                />
                            </Box>
                            <Box display="flex" flexGrow={1} justifyContent="center" alignItems="flex-end">
                                <Typography
                                    style={{
                                        color: "#094FA2",
                                        fontSize: "25px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    <b>1500-1700</b>
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Box maxWidth="70%">
                                <img
                                    style={{ position: "relative", width: "100%" }}
                                    src="/pic/NL/Value/1700_1900.png"
                                    alt=""
                                />
                            </Box>
                            <Box display="flex" flexGrow={1} justifyContent="center" alignItems="flex-end">
                                <Typography
                                    style={{
                                        color: "#094FA2",
                                        fontSize: "25px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    <b>1700-1900</b>
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Box maxWidth="70%">
                                <img
                                    style={{ position: "relative", width: "100%" }}
                                    src="/pic/NL/Value/1900_2000.png"
                                    alt=""
                                />
                            </Box>
                            <Box display="flex" flexGrow={1} justifyContent="center" alignItems="flex-end">
                                <Typography
                                    style={{
                                        color: "#094FA2",
                                        fontSize: "25px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    <b>1900-2000</b>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("RoyalExampleTwo")}
                    next={() => setDalogId("ExternalReclamation")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
