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
                                    Under our revolutionists’ blood, we have to unite our republic firmly. Our great
                                    leaders pass on purity and invincible might to us, and these spirits run in every
                                    aspect of our life. Our leader is leading us to prosperity and bringing peace to the
                                    world!
                                </b>
                            </DialogContentText>
                        </Box>

                        <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
                            <Box bgcolor="#FDD1D3" padding="16px">
                                <Typography
                                    style={{
                                        color: "#094FA2",
                                        fontSize: "20px",
                                        WebkitTextStrokeWidth: 0,
                                        paddingBottom: "12px",
                                    }}
                                >
                                    <b>Supporting Color</b>
                                </Typography>
                                <Box bgcolor="#FFCF09" padding="16px">
                                    <Typography
                                        style={{
                                            color: "#FFFFFF",
                                            fontSize: "20px",
                                            WebkitTextStrokeWidth: 0,
                                        }}
                                    >
                                        The workers, peasants and intelligentsia yellow
                                    </Typography>
                                    <Typography
                                        style={{
                                            color: "#FFFFFF",
                                            fontSize: "11px",
                                            WebkitTextStrokeWidth: 0,
                                        }}
                                    >
                                        <b>RGB</b> 254.205.47 <b>Hex</b> #fecd2f <b>CMYK</b> 0.19.81.0
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box flexGrow={1} maxWidth="50%" paddingLeft="12px">
                        <Box bgcolor="#FDD1D3" padding="16px">
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
                            <Box bgcolor="#064CA5" padding="24px" marginBottom="24px">
                                <Typography
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: "20px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    sovereignty, peace and friendship blue
                                </Typography>
                                <Typography
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: "11px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    <b>RGB</b> 9.66.162 <b>Hex</b> #094FA2 <b>CMYK</b> 94.59.0.36
                                </Typography>
                            </Box>
                            <Box bgcolor="#FFFFFF" padding="24px" marginBottom="24px">
                                <Typography
                                    style={{
                                        color: "#BBBBBB",
                                        fontSize: "20px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    purity, strength and dignity white
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
                            <Box bgcolor="#ed1c27" padding="24px">
                                <Typography
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: "20px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    communist revolution red
                                </Typography>
                                <Typography
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: "11px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                >
                                    <b>RGB</b>237.28.39<b>Hex</b> #ed1c27 <b>CMYK</b> 0.88.84.7
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("ColorSpecification")}
                    next={() => setDalogId("ColorSpecification")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
