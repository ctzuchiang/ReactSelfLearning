import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, DialogContentText, Box } from "@material-ui/core";
import FirstCollageMenu from "./FirstCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function Advancement({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Advancement</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FirstCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box maxWidth="50%" paddingBottom="18px">
                    <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                        <b>
                            People are jealous of our nation and our leader. Our enemy and other capitalist states use
                            rumors to belittle our existence! We must call them out and state the facts!
                        </b>
                    </DialogContentText>
                </Box>
                <Box
                    padding="18px 32px"
                    bgcolor="#FDD1D3"
                    display="flex"
                    flexGrow={1}
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Box display="flex" flexGrow={1} justifyContent="space-between">
                        <Box display="flex" width="25%" justifyContent="center" alignItems="center">
                            <img
                                style={{ position: "relative", width: "170px", height: "170px" }}
                                src="/pic/NK/advancement/clock.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img
                                style={{ position: "relative", width: "170px" }}
                                src="/pic/NK/advancement/jonko.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img
                                style={{ position: "relative", width: "170px" }}
                                src="/pic/NK/advancement/book.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img
                                style={{ position: "relative", width: "170px" }}
                                src="/pic/NK/advancement/mil.png"
                                alt=""
                            />
                        </Box>
                    </Box>
                    <Box display="flex" flexGrow={1} justifyContent="space-between" paddingTop="24px">
                        <Box display="flex" width="23%" alignItems="center" flexDirection="column">
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                                align="center"
                            >
                                <b>UTC+8:30</b>
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "12px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                                align="center"
                            >
                                We live in the future and are 30 minutes ahead of our enemies
                            </Typography>
                        </Box>
                        <Box display="flex" width="23%" alignItems="center" flexDirection="column">
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                                align="center"
                            >
                                <b>Recreational drugs</b>
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "12px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                                align="center"
                            >
                                High-quality marijuana and various hard and soft drugs for recreational and labor
                                purposes
                            </Typography>
                        </Box>
                        <Box display="flex" width="23%" alignItems="center" flexDirection="column">
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                                align="center"
                            >
                                <b>100% literacy rate</b>
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "12px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                                align="center"
                            >
                                state-funded education from kindergarten to university
                            </Typography>
                        </Box>
                        <Box display="flex" width="23%" alignItems="center" flexDirection="column">
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                                align="center"
                            >
                                <b>No.1 Safety</b>
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "12px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                                align="center"
                            >
                                highest military population in the whole world. Men are highly trained for 10 years and
                                women 6 years in the army
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("Religion")}
                    next={() => setDalogId("Value")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
