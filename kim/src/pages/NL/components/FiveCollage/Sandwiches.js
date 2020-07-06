import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box, DialogContentText } from "@material-ui/core";
import FiveCollageMenu from "./FiveCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function Sandwiches({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Sandwiches</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FiveCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
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
                    padding="24px 32px"
                    bgcolor="#FFDCBF"
                    display="flex"
                    flexGrow={1}
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Box display="flex" flexGrow={1} justifyContent="space-between">
                        <Box
                            display="flex"
                            width="30%"
                            justifyContent="space-between"
                            alignItems="center"
                            paddingRight="2.25vw"
                            borderRight="1px solid #094FA2"
                        >
                            <img
                                style={{ position: "relative", width: "30%" }}
                                src="/pic/NL/sanwich/Rectangle 230.png"
                                alt=""
                            />
                            <img
                                style={{ position: "relative", width: "30%" }}
                                src="/pic/NL/sanwich/Rectangle 229.png"
                                alt=""
                            />
                            <img
                                style={{ position: "relative", width: "30%" }}
                                src="/pic/NL/sanwich/Rectangle 225.png"
                                alt=""
                            />
                        </Box>
                        <Box
                            display="flex"
                            width="30%"
                            justifyContent="space-between"
                            alignItems="center"
                            paddingRight="2.25vw"
                            borderRight="1px solid #094FA2"
                        >
                            <img
                                style={{ position: "relative", width: "30%" }}
                                src="/pic/NL/sanwich/Rectangle 227.png"
                                alt=""
                            />
                            <img
                                style={{ position: "relative", width: "30%" }}
                                src="/pic/NL/sanwich/Rectangle 226.png"
                                alt=""
                            />
                            <img
                                style={{ position: "relative", width: "30%" }}
                                src="/pic/NL/sanwich/Rectangle 228.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="30%" justifyContent="center">
                            <img style={{ position: "relative", width: "70%" }} src="/pic/NL/sanwich/222.png" alt="" />
                        </Box>
                    </Box>
                </Box>

                <Box display="flex" flexGrow={1} justifyContent="space-between">
                    <Box display="flex" width="30%" flexDirection="column">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "20px",
                                WebkitTextStrokeWidth: 0,
                                padding: "8px 0px",
                            }}
                        >
                            <b>Boterham</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            Don’t go overboard! Two kinds of smear are good enough because simplicity is the key to our
                            cold-served boterham—the classic flavors are peanut butter or cheese with ham.
                        </Typography>
                    </Box>
                    <Box display="flex" width="30%" flexDirection="column">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "20px",
                                padding: "8px 0px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            <b>Tosti</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            Our slightly fancier delicacy that requires heating up. The key ingredient is the gooey
                            cheese and some meat products. Four topping max
                        </Typography>
                    </Box>
                    <Box display="flex" width="30%" flexDirection="column">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "20px",
                                padding: "8px 0px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            <b>sandwiches</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            We are wild and free when it comes to sandwiches. They should look tasty with the artisanal
                            bread, layered with organic produce and bright vegetables. Be creative with sandwiches!
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("Frugality")}
                    next={() => setDalogId("Weather")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
