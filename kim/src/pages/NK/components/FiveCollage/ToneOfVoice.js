import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, DialogContentText, Box } from "@material-ui/core";
import FiveCollageMenu from "./FiveCollageMenu";
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
                        <FiveCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box display="flex" flexGrow={1}>
                    <Box maxWidth="50%" paddingRight="16px">
                        <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                            <b>
                                We acquire the concept of revolution and endless loyalty towards the party and the
                                supreme leader. Our voice is united as one sincere message. Our expression is reflecting
                                our endless affection to this perfect socialist utopia!
                            </b>
                        </DialogContentText>
                    </Box>
                    <Box
                        display="flex"
                        maxWidth="50%"
                        bgcolor="#FDD1D3"
                        paddingTop="7vh"
                        paddingBottom="7vh"
                        paddingLeft="32px"
                        paddingRight="32px"
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
                                    fontSize: "18px",
                                    WebkitTextStrokeWidth: 0,
                                    paddingBottom: "32px",
                                }}
                            >
                                <b>Allowed</b>
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "38px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                            >
                                Genuine, Loyal, Passionate
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                            >
                                prosperity, leadership, admiration, equality
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                    paddingBottom: "7vh",
                                }}
                            >
                                power, re-education, united, culture,
                            </Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "18px",
                                    WebkitTextStrokeWidth: 0,
                                    paddingTop: "7vh",
                                    paddingBottom: "32px",
                                }}
                            >
                                <b>prohibited</b>
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "38px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                            >
                                Acting, Obedient, Passive
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                            >
                                famine, dictatorship, cult, peripheral
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                            >
                                hostile, gulag, sheep, brain-washing
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("Grooming")}
                    next={() => setDalogId("PropperAttire")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
