import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, DialogContentText, Box } from "@material-ui/core";
import ThirdCollageMenu from "./ThirdCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function CoatOfArms({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Coat of arms</b>
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
                                    Our origin reflected in this coat of arms. The house of Nassau orange united and
                                    maintained us as one. They believe people are vulnerable individuals, but through
                                    collaboration and support, we become powerful and impactful.
                                </b>
                            </DialogContentText>
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        marginBottom="8px"
                        bgcolor="#FFDCBF"
                        flexGrow={1}
                        width="50%"
                        maxWidth="50%"
                        marginLeft="12px"
                        alignItems="center"
                    >
                        <Box display="flex" padding="32px 64px" justifyContent="center" flexGrow={1}>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <img
                                    style={{
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
                        padding: "8px 0px",
                    }}
                >
                    <b>How to use</b>
                </Typography>
                <Box display="flex" flexGrow={1} justifyContent="space-between">
                    <Box width="50%" maxWidth="50%" paddingRight="20px">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            Only the monarch may use the royal arms. Businesses to which the king has granted a royal
                            warrant may display the royal arms surrounding the words ‘By Royal Warrant Purveyor to the
                            Royal Household.’
                        </Typography>
                    </Box>
                    <Box width="50%" maxWidth="50%">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            Use of any element of the royal arms or the coat of arms of the Kingdom is not permitted, as
                            this could give the impression that an individual was acting on behalf of or with the
                            permission of the monarch or the State of the Netherlands. For example, no one is permitted
                            to use the image of a lion closely resembling the lion in the coat of arms of the Kingdom.
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("NoneOfficailVariation")}
                    next={() => setDalogId("OfficailVariation")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
