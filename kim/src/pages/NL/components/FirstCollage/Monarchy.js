import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, DialogContentText, Box } from "@material-ui/core";
import DialogActionGroup from "../../../DialogActionGroup";
import FirstCollageMenu from "./FirstCollageMenu";

export default function Monarchy({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Our Monarchy</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FirstCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent style={{ marginTop: "-32px" }}>
                <Box display="flex">
                    <Box flexGrow={1} width="50%" maxWidth="50%" marginRight="12px">
                        <Box>
                            <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                                <b>
                                    It is cool to have royalties, but supporting our monarchy is not mandatory, and the
                                    real power lies with the ministers. The monarch is neutral about political topics,
                                    but sometimes they accidentally make some comments, too.
                                </b>
                            </DialogContentText>
                        </Box>
                        <Box
                            display="flex"
                            bgcolor="#FFDCBF"
                            padding="12px 64px 24px 64px"
                            justifyContent="space-between"
                            marginBottom="8px"
                        >
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <img
                                    style={{
                                        padding: "16px 0px",
                                        position: "relative",
                                        width: "80%",
                                        maxHeight: "300px",
                                    }}
                                    src="/pic/NL/monarchy/IMG_0058.png"
                                    alt=""
                                />
                                <Typography style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0 }}>
                                    <b>Previous reigning monarch</b>
                                </Typography>
                                <Typography style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0 }}>
                                    <b>Queen Beatrix</b>
                                </Typography>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <img
                                    style={{
                                        padding: "16px 0px",
                                        position: "relative",
                                        width: "80%",
                                        maxHeight: "300px",
                                    }}
                                    src="/pic/NL/monarchy/Image 23@2x.png"
                                    alt=""
                                />
                                <Typography style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0 }}>
                                    <b>Next reigning monarch</b>
                                </Typography>
                                <Typography style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0 }}>
                                    <b>Princess Catharina-Amalia</b>
                                </Typography>
                            </Box>
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
                        <Box display="flex" padding="24px 64px" justifyContent="center" flexGrow={1}>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <img
                                    style={{
                                        paddingBottom: "16px",
                                        position: "relative",
                                        width: "60%",
                                        maxHeight: "320px",
                                    }}
                                    src="/pic/NL/monarchy/Rectangle 217@2x.png"
                                    alt=""
                                />
                                <Typography style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0 }}>
                                    <b>Current reigning monarch</b>
                                </Typography>
                                <Typography style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0 }}>
                                    <b>King Willem-Alexander</b>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Typography
                    style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0, padding: "8px 0px" }}
                >
                    <b>How to have royalties</b>
                </Typography>
                <Box display="flex" flexGrow={1} justifyContent="space-between">
                    <Box width="30%" maxWidth="30%" paddingRight="20px">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                                lineHeight: 1.4,
                            }}
                        >
                            1. You don’t have to have an old royal family to have the monarch, our first ruler only
                            established the kingdom in 1815, but you have to have a royal house first. The easiest way
                            to do so is to have some relationship with the British monarch and wah-la!
                        </Typography>
                    </Box>
                    <Box width="30%" maxWidth="30%" paddingRight="20px">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                                lineHeight: 1.4,
                            }}
                        >
                            2. People who go to state-school and have a regular job also can be part of the family. Our
                            royal families have commoner's experiences as well and are more down to earth than other
                            monarchs.
                        </Typography>
                    </Box>
                    <Box width="30%" maxWidth="30%" paddingRight="20px">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                                lineHeight: 1.4,
                            }}
                        >
                            3. Our people also have to spend a significant portion of their taxes to sustain the royal
                            family, and not everyone likes that, so be aware of the financial situation first. On the
                            bright side, there's always a day off in the name of our king or queen.
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("ExternalReclamation")}
                    next={() => setDalogId("RoyalExampleOne")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
