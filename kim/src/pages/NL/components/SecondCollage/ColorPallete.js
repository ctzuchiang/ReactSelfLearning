import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, DialogContentText, Box } from "@material-ui/core";
import SecondCollageMenu from "./SecondCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function ColorPallete({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "24px",
                                WebkitTextStrokeWidth: 0,
                                marginBottom: "-16px",
                            }}
                        >
                            <b>(The One and Only)</b>
                        </Typography>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Color Pallete</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <SecondCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box display="flex">
                    <Box
                        display="flex"
                        flexGrow={1}
                        maxWidth="50%"
                        height="inherit"
                        paddingRight="12px"
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="space-between"
                    >
                        <Box>
                            <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                                <b>
                                    We become independent under prince Orange’s coat of arms. Despite the nationalistic
                                    orange faded into red, we are the oldest tricolor community. Many copycats claim our
                                    tricolor is their liberty, but we are the original owner of freedom, freedom, and
                                    solidarity.
                                </b>
                            </DialogContentText>
                        </Box>

                        <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
                            <Box bgcolor="#FFDCBF" padding="16px">
                                <Typography
                                    style={{
                                        color: "#094FA2",
                                        fontSize: "20px",
                                        WebkitTextStrokeWidth: 0,
                                        paddingBottom: "12px",
                                    }}
                                >
                                    <b>Very important supporting color</b>
                                </Typography>
                                <Box bgcolor="#fd7f00" padding="16px">
                                    <Typography
                                        style={{
                                            color: "#FFFFFF",
                                            fontSize: "20px",
                                            WebkitTextStrokeWidth: 0,
                                            marginBottom: "32px",
                                        }}
                                    >
                                        Willem van Oranje orange
                                    </Typography>
                                    <Typography
                                        style={{
                                            color: "#FFFFFF",
                                            fontSize: "11px",
                                            WebkitTextStrokeWidth: 0,
                                        }}
                                    >
                                        <b>RGB</b> 253.127.0 <b>Hex</b> #fd7f00 <b>CMYK</b> 0.50.100.1
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box flexGrow={1} maxWidth="50%" paddingLeft="12px">
                        <Box bgcolor="#FFDCBF" padding="16px">
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                    paddingBottom: "12px",
                                }}
                            >
                                <b>Primary Color</b>
                            </Typography>
                            <Box bgcolor="#21468b" padding="24px" marginBottom="24px">
                                <Typography
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: "20px",
                                        WebkitTextStrokeWidth: 0,
                                        marginBottom: "32px",
                                    }}
                                >
                                    Cobalt blue
                                </Typography>
                                <Typography
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: "11px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    <b>RGB</b> 33.70.139 <b>Hex</b> #21468b <b>CMYK</b> 76.50.0.45
                                </Typography>
                            </Box>
                            <Box bgcolor="#FFFFFF" padding="24px" marginBottom="24px">
                                <Typography
                                    style={{
                                        color: "#BBBBBB",
                                        fontSize: "20px",
                                        WebkitTextStrokeWidth: 0,
                                        marginBottom: "32px",
                                    }}
                                >
                                    Silver white
                                </Typography>
                                <Typography
                                    style={{
                                        color: "#BBBBBB",
                                        fontSize: "11px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    <b>RGB</b> 255.255.255 <b>Hex</b> #ffffff <b>CMYK</b> 0.0.0.0
                                </Typography>
                            </Box>
                            <Box bgcolor="#ae1c28" padding="24px">
                                <Typography
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: "20px",
                                        WebkitTextStrokeWidth: 0,
                                        marginBottom: "32px",
                                    }}
                                >
                                    Vermillion red
                                </Typography>
                                <Typography
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: "11px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    <b>RGB</b>174.28.40<b>Hex</b> #ae1c28 <b>CMYK</b> 0.84.77.32
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("EcstaticExample")}
                    next={() => setDalogId("ShadesVariation")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
