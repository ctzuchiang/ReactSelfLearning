import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box, DialogContentText } from "@material-ui/core";
import FiveCollageMenu from "./FiveCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function Frugality({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Frugality</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FiveCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent style={{ marginTop: "-38px" }}>
                <Box maxWidth="50%" paddingBottom="8px">
                    <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                        <b>
                            Some people say we are cheap and stingy, but we call our love for a good bargain frugal.
                            Financial management to its finest is a mentality, and it needs much practice and patience
                            to find the true essence of frugalness.
                        </b>
                    </DialogContentText>
                </Box>
                <Box
                    padding="16px 32px"
                    marginTop="-12px"
                    bgcolor="#FFDCBF"
                    display="flex"
                    flexGrow={1}
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Box display="flex" flexGrow={1} justifyContent="space-between">
                        <Box display="flex" width="25%" justifyContent="center">
                            <img
                                style={{ position: "relative", width: "70%" }}
                                src="/pic/NL/frugality/tend.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img
                                style={{ position: "relative", width: "70%" }}
                                src="/pic/NL/frugality/Image-56@2x.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img
                                style={{ position: "relative", width: "70%" }}
                                src="/pic/NL/frugality/Group 140@2x.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img
                                style={{ position: "relative", width: "70%" }}
                                src="/pic/NL/frugality/piekfijn@2x.png"
                                alt=""
                            />
                        </Box>
                    </Box>
                </Box>

                <Box display="flex" flexGrow={1} justifyContent="space-between" marginTop="12px">
                    <Box display="flex" width="23%" alignItems="center" flexDirection="column">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "18px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            We prefer to camp instead of staying in a hotel. Why spend money when you can enjoy nature
                            for free?
                        </Typography>
                    </Box>
                    <Box display="flex" width="23%" alignItems="center" flexDirection="column">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "18px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            We always follow the hamster. They bring us to good deals with the bonuskaart
                        </Typography>
                    </Box>
                    <Box display="flex" width="23%" alignItems="center" flexDirection="column">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "18px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            BYOL: We bring our own lunch, and to stay true to ourselves. Boterham is good enough,
                            luxurious sandwiches and tosti are for special occasions.
                        </Typography>
                    </Box>
                    <Box display="flex" width="23%" alignItems="center" flexDirection="column">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "18px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            Upcycling is a part of sustainability too. We don’t like to buy new things if we can find
                            them in thrift stores.
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("WeatherExample")}
                    next={() => setDalogId("Sandwiches")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
