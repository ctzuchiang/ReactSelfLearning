import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, DialogContentText, Box } from "@material-ui/core";
import FourCollageMenu from "./FourCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function ToneOfVoice({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Tone of Voice</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FourCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box display="flex" flexGrow={1}>
                    <Box maxWidth="50%" paddingRight="16px">
                        <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                            <b>
                                Everyone has the same degree of freedom here. We can think, say, and do as we wish. We
                                often talk with straightforwardness, but we try not to offend someone, injure, or incite
                                others with hatred or hostility. We have freedom of speech, but we do not need to
                                express everything.
                            </b>
                        </DialogContentText>
                    </Box>
                    <Box
                        display="flex"
                        maxWidth="50%"
                        bgcolor="#FFDCBF"
                        padding="32px"
                        flexDirection="column"
                        flexGrow={1}
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            borderBottom="2px solid #094FA2"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                    paddingBottom: "32px",
                                }}
                            >
                                <b>enticing</b>
                            </Typography>
                            <Typography style={{ color: "#094FA2", fontSize: "25px", WebkitTextStrokeWidth: 0 }}>
                                tolerant, liberal, diverse, respect
                            </Typography>
                            <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                                proud, confident, honest, innovative
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                    paddingBottom: "32px",
                                }}
                            >
                                gratis, korting, bonus, fresh smoothies,
                            </Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                    paddingTop: "32px",
                                    paddingBottom: "32px",
                                }}
                            >
                                <b>boring</b>
                            </Typography>
                            <Typography style={{ color: "#094FA2", fontSize: "25px", WebkitTextStrokeWidth: 0 }}>
                                petty, restrictive, fanatical, rude
                            </Typography>
                            <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                                devious, modest, subdue, conservative
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                            >
                                original price, one and two-cent coins, Heineken
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("FourTypography")}
                    next={() => setDalogId("FourTypography")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
