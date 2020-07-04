import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import ThirdCollageMenu from "./ThirdCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function LogoExampleTwo({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Logo do's and don'ts</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <ThirdCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent style={{ marginTop: "-28px" }}>
                <Box display="flex" bgcolor="#FDD1D3" padding="32px">
                    <Box
                        display="flex"
                        flexGrow={1}
                        borderRight="2px solid #094FA2"
                        width="50%"
                        maxWidth="50%"
                        paddingRight="32px"
                        flexDirection="column"
                    >
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Box display="flex" justifyContent="center" alignItems="center" width="100%" >
                                <img
                                    style={{
                                        position: "relative",
                                        width: "350px",
                                        height: "350px",
                                    }}
                                    src="/pic/NK/LOGO/good_logo_two.png"
                                    alt=""
                                />
                            </Box>
                        </Box>

                        <Box paddingTop="16px">
                            <Typography style={{ color: "#094FA2", fontSize: "25px", WebkitTextStrokeWidth: 0 }}>
                                <b>Allowed</b>
                            </Typography>
                            <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                                <b>The grandness of our Great successor peak through. Prime example!</b>
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flexGrow={1}
                        width="50%"
                        maxWidth="50%"
                        paddingLeft="32px"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Box width="100%" display="flex" justifyContent="center" alignItems="center">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "350px",
                                        maxHeight: "350px",
                                    }}
                                    src="/pic/NK/LOGO/bad_logo_two.png"
                                    alt=""
                                />
                            </Box>
                        </Box>
                        <Box paddingTop="16px">
                            <Typography style={{ color: "#094FA2", fontSize: "25px", WebkitTextStrokeWidth: 0 }}>
                                <b>Prohibited</b>
                            </Typography>
                            <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                                <b>NO! What a disgrace to make a mockery out of our great successor! NO!</b>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("LogoExampleOne")}
                    next={() => setDalogId("Emblem")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
