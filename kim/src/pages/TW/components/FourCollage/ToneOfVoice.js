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
                                There is a big grey area in terms of what we can and cannot express ourselves. We don’t
                                talk about our status unless it is necessary. We want recognition, but our expression
                                and emotion are continuously changing to fit our correspondent.
                            </b>
                        </DialogContentText>
                    </Box>
                    <Box
                        display="flex"
                        maxWidth="50%"
                        bgcolor="#D9F0EF"
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
                                <b>ambiguous</b>
                            </Typography>
                            <Typography style={{ color: "#094FA2", fontSize: "25px", WebkitTextStrokeWidth: 0 }}>
                                <b>certain, fear, peaceful</b>
                            </Typography>
                            <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                                democracy, administrative, status quo
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                    paddingBottom: "32px",
                                }}
                            >
                                Chinese, Chinese Taipei, Republic of China
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
                                <b>precise</b>
                            </Typography>
                            <Typography style={{ color: "#094FA2", fontSize: "25px", WebkitTextStrokeWidth: 0 }}>
                                <b>doubtful, conflicting, lost</b>
                            </Typography>
                            <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                                populism, sovereignty, taboo
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                            >
                                Taiwanese, Taiwan
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("FourTypographyExampleTwo")}
                    next={() => setDalogId("FourTypography")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
