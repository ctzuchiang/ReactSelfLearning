import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box, DialogContentText } from "@material-ui/core";
import FiveCollageMenu from "./FiveCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function PropperAttire({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Attire</b>
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
                            In order to protect our political identity, our people should dress according to the
                            national taste. People who wear other styles of dress will become fools, and that nation
                            will come to ruin.
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
                        <Box display="flex" width="25%" justifyContent="center">
                            <img style={{ position: "relative", width: "70%" }} src="/pic/NK/attire/1.png" alt="" />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img style={{ position: "relative", width: "70%" }} src="/pic/NK/attire/2.png" alt="" />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img style={{ position: "relative", width: "70%" }} src="/pic/NK/attire/3.png" alt="" />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img style={{ position: "relative", width: "70%" }} src="/pic/NK/attire/4.png" alt="" />
                        </Box>
                    </Box>
                </Box>
                <Typography
                    style={{
                        color: "#094FA2",
                        fontSize: "20px",
                        WebkitTextStrokeWidth: 0,
                        padding: "8px 0px",
                    }}
                >
                    <b>Regulations</b>
                </Typography>
                <Box display="flex" flexGrow={1} justifyContent="space-between">
                    <Box display="flex" width="23%" alignItems="center" flexDirection="column">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            1. We show our allegiance by wearing the loyalty badge next to the chest. Demonized western
                            clothing, such as jeans are prohibited.
                        </Typography>
                    </Box>
                    <Box display="flex" width="23%" alignItems="center" flexDirection="column">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            2. We do not get lost in fashion, and if we do, we will go for military chic to represent
                            our nation. We only wear locally branded items of clothing because possessing demonized
                            western-branded product is a severe felony.
                        </Typography>
                    </Box>
                    <Box display="flex" width="23%" alignItems="center" flexDirection="column">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            3. Our Great Successor ban women from wearing trousers. Women are only allowed to wear
                            skirts in our nation. No question allowed!
                        </Typography>
                    </Box>
                    <Box display="flex" width="23%" alignItems="center" flexDirection="column">
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            4. Dirty shoes mean capitalism and corruption. We cannot demise our country with dirty
                            shoes, so we always polish our shoes until it shines.
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("ToneOfVoice")}
                    next={() => setDalogId("Grooming")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
