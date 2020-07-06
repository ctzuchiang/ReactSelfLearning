import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import FiveCollageMenu from "./FiveCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function FortuneTelling({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Fortune telling</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FiveCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box
                    padding="16px 32px"
                    marginTop="-12px"
                    bgcolor="#D9F0EF"
                    display="flex"
                    flexGrow={1}
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Box display="flex" flexGrow={1} justifyContent="space-between">
                        <Box display="flex" width="25%" justifyContent="center">
                            <img
                                style={{ position: "relative", width: "110%" }}
                                src="/pic/TW/Forutune_telling/1.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img
                                style={{ position: "relative", width: "110%" }}
                                src="/pic/TW/Forutune_telling/2.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img
                                style={{ position: "relative", width: "110%" }}
                                src="/pic/TW/Forutune_telling/3.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img
                                style={{ position: "relative", width: "110%" }}
                                src="/pic/TW/Forutune_telling/4.png"
                                alt=""
                            />
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
                            <b>Face reading</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            One of the ways we decode our destiny is through face reading, by examining the relative
                            position of our facial structures, we understand where our life will lead us to.
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
                            <b>Palm reading</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            Palm reading is one of the most natural methods to know about our future direction. The
                            answer to our life span, career, marriage, education is all hidden in our palms.
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
                            <b>Tarot cards</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            Young people like to know about their faith in a more westernized way. Nonetheless, tarot
                            readings sessions still give us better guidance and direction in life.
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
                            <b>God’s whisperers</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            We often opt for the easiest and most direct way for guidance, and we ask the gods
                            themselves directly. However, God has the right to decide whether or not they want to answer
                            our question, and we do not abuse God’s will.
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("Spirituality")}
                    next={() => setDalogId("Spirituality")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
