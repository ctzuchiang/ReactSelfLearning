import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box, DialogContentText } from "@material-ui/core";
import DialogActionGroup from "../../../DialogActionGroup";
import ThirdCollageMenu from "./ThirdCollageMenu";

export default function Landmarks({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Landmarks</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <ThirdCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent style={{ marginTop: "-38px" }}>
                <Box maxWidth="50%" paddingBottom="8px">
                    <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                        <b>
                            Our Great Leader use landmarks to deliver their ideology from above, it is these magnificent
                            pieces that reminded us of our revolution philosophy.
                        </b>
                    </DialogContentText>
                </Box>
                <Box
                    padding="16px 32px"
                    marginTop="-12px"
                    bgcolor="#FDD1D3"
                    display="flex"
                    flexGrow={1}
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Box display="flex" flexGrow={1} justifyContent="space-between">
                        <Box display="flex" width="23%" justifyContent="center">
                            <img style={{ position: "relative", width: "100%" }} src="/pic/NK/landmarks/1.png" alt="" />
                        </Box>
                        <Box display="flex" width="23%" justifyContent="center">
                            <img style={{ position: "relative", width: "100%" }} src="/pic/NK/landmarks/2.png" alt="" />
                        </Box>
                        <Box display="flex" width="23%" justifyContent="center">
                            <img style={{ position: "relative", width: "100%" }} src="/pic/NK/landmarks/3.png" alt="" />
                        </Box>
                        <Box display="flex" width="23%" justifyContent="center">
                            <img style={{ position: "relative", width: "100%" }} src="/pic/NK/landmarks/4.png" alt="" />
                        </Box>
                    </Box>
                </Box>

                <Box display="flex" flexGrow={1} justifyContent="space-between" marginTop="12px">
                    <Box display="flex" width="23%" flexDirection="column">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "20px",
                                WebkitTextStrokeWidth: 0,
                            }}
                            gutterBottom
                        >
                            <b>Juche Tower</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "18px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            Inspired by the stone pagodas from the premodern era, the Supreme commander designed this
                            torch as the centre point for our revolution philosophy.
                        </Typography>
                    </Box>
                    <Box display="flex" width="23%" flexDirection="column">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "20px",
                                WebkitTextStrokeWidth: 0,
                            }}
                            gutterBottom
                        >
                            <b>Arch of Victory</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "18px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            Inspired by the stone pagodas from the premodern era, the Supreme commander designed this
                            torch as the center point for our revolution philosophy.
                        </Typography>
                    </Box>
                    <Box display="flex" width="23%" flexDirection="column">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "20px",
                                WebkitTextStrokeWidth: 0,
                            }}
                            gutterBottom
                        >
                            <b>Monument of Party founding</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "18px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            “Long live the leader and the organizer of our victory, the Worker’s Party!” With their
                            leadership, peasants, workers, and intellectuals of our country will have to unite under our
                            party’s progressive vision.
                        </Typography>
                    </Box>
                    <Box display="flex" width="23%" flexDirection="column">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "20px",
                                WebkitTextStrokeWidth: 0,
                            }}
                            gutterBottom
                        >
                            <b>Ryugyong Hotel</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "18px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            Aim to be the tallest building in the world, this hotel was designed to imitate the sacred
                            mountain of the Great Leader’s birth, and present it to him on his 80th birthday. Now it is
                            the world’s tallest unoccupied building.
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("EmblemExample")}
                    next={() => setDalogId("Logo")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
