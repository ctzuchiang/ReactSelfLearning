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
                                    We are diagnosed with Stockholm syndrome and remain sympathetic to the past. It
                                    depends on who you talk to; we (do/do not) recognize our sovereignty. What we
                                    (need/don’t need) is another liberation—we (have/ don’t have) a complicated
                                    relationship in our community.
                                </b>
                            </DialogContentText>
                        </Box>

                        <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
                            <Box bgcolor="#D9F0EF" padding="16px">
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
                                <Box bgcolor="#43b3ae" padding="16px">
                                    <Typography
                                        style={{
                                            color: "#FFFFFF",
                                            fontSize: "20px",
                                            WebkitTextStrokeWidth: 0,
                                            marginBottom: "32px",
                                        }}
                                    >
                                        Independent
                                        <br />
                                        verdigris green
                                    </Typography>
                                    <Typography
                                        style={{
                                            color: "#FFFFFF",
                                            fontSize: "11px",
                                            WebkitTextStrokeWidth: 0,
                                        }}
                                    >
                                        <b>RGB</b> 67.179.174 <b>Hex</b> #43b3ae <b>CMYK</b> 63.0.3.30
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box flexGrow={1} maxWidth="50%" paddingLeft="12px">
                        <Box bgcolor="#D9F0EF" padding="16px">
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
                            <Box bgcolor="#000095" padding="24px" marginBottom="24px">
                                <Typography
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: "20px",
                                        WebkitTextStrokeWidth: 0,
                                        marginBottom: "32px",
                                    }}
                                >
                                    nationalism and liberty blue
                                </Typography>
                                <Typography
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: "11px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    <b>RGB</b> 0.0.149 <b>Hex</b> #000095 <b>CMYK</b> 100.100.0.42
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
                                    democracy and equality white
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
                            <Box bgcolor="#fe0000" padding="24px">
                                <Typography
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: "20px",
                                        WebkitTextStrokeWidth: 0,
                                        marginBottom: "32px",
                                    }}
                                >
                                    people’s livelihood and fraternity red
                                </Typography>
                                <Typography
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: "11px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    <b>RGB</b>254.0.0<b>Hex</b> #fe0000 <b>CMYK</b> 0.100.1000.32
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("GreyAreaExample")}
                    next={() => setDalogId("ShadesVariation")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
