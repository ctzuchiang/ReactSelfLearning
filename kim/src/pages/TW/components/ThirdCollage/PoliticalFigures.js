import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, DialogContentText, Box } from "@material-ui/core";
import ThirdCollageMenu from "./ThirdCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function PoliticalFigures({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Political figures</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <ThirdCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent style={{ marginTop: "-33px" }}>
                <Box display="flex">
                    <Box flexGrow={1} width="50%" maxWidth="50%" marginRight="12px">
                        <Box>
                            <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                                <b>
                                    There is always one prominent figure we love or hate depends on who you support.
                                    Scandals and rumors are there to confuse us. The ideal of freedom and democracy from
                                    different political leaders enhances our populism's experience.
                                </b>
                            </DialogContentText>
                        </Box>
                        <Box
                            display="flex"
                            bgcolor="#D9F0EF"
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
                                    src="/pic/TW/politicians/1.png"
                                    alt=""
                                />
                                <Typography
                                    style={{
                                        color: "#094FA2",
                                        fontSize: "16px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                    align="center"
                                >
                                    <b>Our nation father Sun Yat-sen</b>
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
                                    src="/pic/TW/politicians/2.png"
                                    alt=""
                                />
                                <Typography
                                    style={{
                                        color: "#094FA2",
                                        fontSize: "16px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                    align="center"
                                >
                                    <b>Previous dictator Chiang Kai-shek</b>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        marginBottom="8px"
                        bgcolor="#D9F0EF"
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
                                        // maxHeight: "320px",
                                    }}
                                    src="/pic/TW/politicians/3.png"
                                    alt=""
                                />
                                <Typography
                                    style={{
                                        color: "#094FA2",
                                        fontSize: "16px",
                                        WebkitTextStrokeWidth: 0,
                                    }}
                                    align="center"
                                >
                                    <b>President Tsai Ing-wen</b>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" flexGrow={1} justifyContent="space-between">
                    <Box width="25%" maxWidth="25%" paddingRight="20px">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "18px",
                                WebkitTextStrokeWidth: 0,
                                lineHeight: 1.4,
                            }}
                        >
                            We have his face printed on currency and portraits hanging in school, and we call this man
                            who only came to our country three times (and never stayed over one month) our nation’s
                            father.
                        </Typography>
                    </Box>
                    <Box width="25%" maxWidth="25%" paddingRight="20px">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "18px",
                                WebkitTextStrokeWidth: 0,
                                lineHeight: 1.4,
                            }}
                        >
                            He’s a prominent figure, but in what way? Some people still think days are better under his
                            leadership, but does his ideology fit our current situation?
                        </Typography>
                    </Box>
                    <Box width="50%" maxWidth="50%" paddingRight="20px">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "18px",
                                WebkitTextStrokeWidth: 0,
                                lineHeight: 1.4,
                            }}
                        >
                            With a new president comes with new executive power. Our current leader is the seventh
                            president of our country. Being the first female elected to the office in Asia, She is a
                            progressive one. Some of us still criticize her for being too liberal and stern with
                            different reforms, but maybe this is the way we want to go?
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("SymbolExample")}
                    next={() => setDalogId("PoliticalFiguresExample")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
