import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box, DialogContentText } from "@material-ui/core";
import FiveCollageMenu from "./FiveCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function Weather({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Our Weather</b>
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
                            We cherish all good weather and naturally gather under the warm sun and a calm breeze. We
                            can reclaim land from the ocean, but we cannot change the rainy days. Therefore we are
                            equipped with different skills and assistance to help us move forward in unpredictable
                            situations.
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
                                src="/pic/NL/weather/Image 65@2x.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img
                                style={{ position: "relative", width: "70%" }}
                                src="/pic/NL/weather/Group 139@2x.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img
                                style={{ position: "relative", width: "70%" }}
                                src="/pic/NL/weather/pngwave@2x.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img
                                style={{ position: "relative", width: "70%" }}
                                src="/pic/NL/weather/Image-45@2x@2x.png"
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
                            The number one and most reliable forecast system is Buienradar. We all install this to check
                            the weather for the next hour or the next thirty minutes.
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
                            Our fashion style is like our weather, layered and unpredictable. We will throw in
                            sunglasses in our winter items just in case the weather is good. Preparation is the key to
                            survive our weather.
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
                            Although the weather is undesirable, we are not made out of sugar, and our life still goes
                            on. Rain and wind is not an excuse for not us to go out. Preserve with our bike is a skill
                            we learn at a very young age.
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
                            Umbrella doesn’t work here because the strong wind will blow it into lovely tulips. Not many
                            locals use this, and that's how we spot foreigners. We prefer raincoats for its durability
                            and mobility.
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("Sandwiches")}
                    next={() => setDalogId("WeatherExample")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
