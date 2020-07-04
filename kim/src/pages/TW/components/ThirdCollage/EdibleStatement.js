import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box, DialogContentText } from "@material-ui/core";
import DialogActionGroup from "../../../DialogActionGroup";
import ThirdCollageMenu from "./ThirdCollageMenu";

export default function EdibleStatement({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Edible statement</b>
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
                            Our local delicacy bound us stronger as a community more than any politicians and policies.
                            Our media shy away from general topics and focus on gourmet reports in our lovely islands
                            because nothing can represent us better than our street food.
                        </b>
                    </DialogContentText>
                </Box>
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
                            <img style={{ position: "relative", width: "70%" }} src="/pic/TW/food/1.png" alt="" />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img style={{ position: "relative", width: "70%" }} src="/pic/TW/food/2.png" alt="" />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img style={{ position: "relative", width: "70%" }} src="/pic/TW/food/3.png" alt="" />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img style={{ position: "relative", width: "70%" }} src="/pic/TW/food/4.png" alt="" />
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
                            <b>Tapioca Milk Tea</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "18px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            Our unanimous nation pride is tapioca milk tea, also known as bubble milk tea. People
                            worldwide are being “creative” with tapioca milk tea, but that is wholly unacceptable
                            because our way is the only proper way!
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
                            <b>Fried Chicken Cutlets</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "18px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            Unlike schnitzel, our chicken cutlets are snacks instead of a proper meal. This face-size
                            chicken breast is our staple street food, and we cannot have it without tapioca milk because
                            it is the classic combination.
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
                            <b>Stinky Tofu</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "18px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            The pungent smell of this deep-fried fermented tofu is very much debatable among our people.
                            Just like our politics, people love it or hate it this dish. However, we can all agree
                            stinky tofu is one of the most represented and bizarre food in our country.
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
                            <b>Xiao Long Bao</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "18px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            The most famous food in our country! The Michelin one-star chain dedicated our spirit in
                            crafting this gourmet soup dumpling. Unlike the fight in the house of representatives, xiao
                            long bao introduce our country to the international community with a more positive note.
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("ControversialExample")}
                    next={() => setDalogId("Symbol")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
