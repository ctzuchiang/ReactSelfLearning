import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, DialogContentText, Box } from "@material-ui/core";
import ThirdCollageMenu from "./ThirdCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function Logo({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Logo</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <ThirdCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent style={{ marginTop: "-28px" }}>
                <Box display="flex">
                    <Box flexGrow={1} width="50%" maxWidth="50%" marginRight="12px">
                        <Box>
                            <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                                <b>
                                    Without the Mount Beakdu Bloodline and their dynasty, it is impossible to practice
                                    Juche’s idea of self-reliance. We have to admire them. It is a genuine
                                    hero-worshiping.
                               </b>
                            </DialogContentText>
                        </Box>
                        <Box
                            display="flex"
                            bgcolor="#FDD1D3"
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
                                    src="/pic/NK/LOGO/il_sung_2.png"
                                    alt=""
                                />
                                <Typography style={{ color: "#094FA2", fontSize: "18px", WebkitTextStrokeWidth: 0 }}>
                                    <b>The Great Leader</b>
                                </Typography>
                                <Typography style={{ color: "#094FA2", fontSize: "18px", WebkitTextStrokeWidth: 0 }}>
                                    <b>Kim IL Sung</b>
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
                                    src="/pic/NK/LOGO/jung_il_2.png"
                                    alt=""
                                />
                                <Typography style={{ color: "#094FA2", fontSize: "18px", WebkitTextStrokeWidth: 0 }}>
                                    <b>The Great Successor</b>
                                </Typography>
                                <Typography style={{ color: "#094FA2", fontSize: "18px", WebkitTextStrokeWidth: 0 }}>
                                    <b>Kim Jung Un</b>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        marginBottom="8px"
                        bgcolor="#FDD1D3"
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
                                    src="/pic/NK/LOGO/jun_un_2.png"
                                    alt=""
                                />
                                <Typography style={{ color: "#094FA2", fontSize: "18px", WebkitTextStrokeWidth: 0 }}>
                                    <b>The supreme Leader</b>
                                </Typography>
                                <Typography style={{ color: "#094FA2", fontSize: "18px", WebkitTextStrokeWidth: 0 }}>
                                    <b>Kim Jung Il</b>
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
                            1. With all our hearts, we must have the Mount Baekdu bloodline and use it vigorously,
                            enthusiastically, and loyally.
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
                            2. The logo should always set to the highest quality available to capture the grandeur of
                            the one and only Mount Baekdu bloodline.
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
                            3. The face of the great leader, supreme commander, and the great successor should always be
                            vidible and clear. Their expression should reflect their leadership and personality, kind
                            and friendly is the essence here.
                        </Typography>
                    </Box>
                    <Box width="25%" maxWidth="25%">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "18px",
                                WebkitTextStrokeWidth: 0,
                                lineHeight: 1.4,
                            }}
                        >
                            4. Be creative on the logo placement. They are probiding us with everything, and we need to
                            return this favour with our heart and soul. Huge portraits and big staues in public area are
                            prime examples for the mass, but small
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("Landmarks")}
                    next={() => setDalogId("LogoExampleOne")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
