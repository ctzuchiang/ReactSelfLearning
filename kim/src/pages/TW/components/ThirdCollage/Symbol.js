import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, DialogContentText, Box } from "@material-ui/core";
import ThirdCollageMenu from "./ThirdCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function Symbol({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Our symbol</b>
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
                                    Is this our symbol? We recognize our blue sky and white sun, but this is the
                                    out-dated version from our previous colonizer. The oppressor used this logo for
                                    their regime, and now it represents us?
                                </b>
                            </DialogContentText>
                        </Box>
                        <Box
                            display="flex"
                            bgcolor="#D9F0EF"
                            padding="32px 64px"
                            justifyContent="space-between"
                            marginBottom="8px"
                        >
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "80%",
                                        maxHeight: "300px",
                                    }}
                                    src="/pic/TW/national_emblem/1.png"
                                    alt=""
                                />
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "80%",
                                        maxHeight: "300px",
                                    }}
                                    src="/pic/TW/national_emblem/2.png"
                                    alt=""
                                />
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
                                        position: "relative",
                                        width: "60%",
                                        // maxHeight: "320px",
                                    }}
                                    src="/pic/TW/national_emblem/3.png"
                                    alt=""
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" flexGrow={1} justifyContent="space-between">
                    <Box width="25%" maxWidth="25%" paddingRight="20px">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                                lineHeight: 1.4,
                            }}
                        >
                            The political party uses the logo of a blue sky and white sun from our previous colonizer.
                            Many people confuse this party logo with the emblem we put on our flag and documentations.
                            Do not scale down the white sun, or we will become a party state again!
                        </Typography>
                    </Box>
                    <Box width="25%" maxWidth="25%" paddingRight="20px">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                                lineHeight: 1.4,
                            }}
                        >
                            The national symbol of a blue sky and white sun is adapted from the previous colonizer. Many
                            people confuse the national emblem with the party logo from our last colonizer. Do not scale
                            up the white sun, or we will be a party state again!
                        </Typography>
                    </Box>
                    <Box width="50%" maxWidth="50%" paddingRight="20px">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                                lineHeight: 1.4,
                            }}
                        >
                            To enhance the uncertainty, we have a different name and emblem for international affairs
                            such as sports events. We have to use this to represent us in the international community or
                            else someone will be very very aggressive. However, this emblem is like a myth to us, and we
                            don’t understand what is stands for.
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("EdibleStatement")}
                    next={() => setDalogId("SymbolExample")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
