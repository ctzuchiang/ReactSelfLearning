import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box, DialogContentText } from "@material-ui/core";
import FiveCollageMenu from "./FiveCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function Spirituality({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Spirituality</b>
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
                            We are not super sure about our political status nor the government, so we ask different
                            gods or sacred power for different answers. We respect different kinds of religion because
                            any god’s scripture is more dignify and certain than our own idea.
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
                            <img
                                style={{ position: "relative", width: "70%" }}
                                src="/pic/TW/Spirituality/1.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img
                                style={{ position: "relative", width: "70%" }}
                                src="/pic/TW/Spirituality/2.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img
                                style={{ position: "relative", width: "70%" }}
                                src="/pic/TW/Spirituality/3.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center">
                            <img
                                style={{ position: "relative", width: "70%" }}
                                src="/pic/TW/Spirituality/4.png"
                                alt=""
                            />
                        </Box>
                    </Box>
                    <Box display="flex" flexGrow={1} justifyContent="space-between" marginTop="12px">
                        <Box display="flex" width="23%" alignItems="center" flexDirection="column">
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                                gutterBottom
                                align="center"
                            >
                                <b>Mazu</b>
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "15px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                                align="center"
                            >
                                She is one of our most beloved goddesses. Her duty is mostly related to sea affairs but
                                she is very friendly and reliable in sorting all kinds of problems
                            </Typography>
                        </Box>
                        <Box display="flex" width="23%" alignItems="center" flexDirection="column">
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                                gutterBottom
                                align="center"
                            >
                                <b>Yu Huang Da Di</b>
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "15px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                                align="center"
                            >
                                He is the big boss of our gods and goddesses, and we have nothing but respect for him.
                                We say hi to him before communicating with different spirits so he can register us and
                                our requests.
                            </Typography>
                        </Box>
                        <Box display="flex" width="23%" alignItems="center" flexDirection="column">
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                                gutterBottom
                                align="center"
                            >
                                <b>Zhu Sheng Niang Niang</b>
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "15px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                                align="center"
                            >
                                She is our god version of Marry Poppins. Most of our children and mothers are blessed by
                                here mighty power, and people will also pray to her for bearing children.
                            </Typography>
                        </Box>
                        <Box display="flex" width="23%" alignItems="center" flexDirection="column">
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                                gutterBottom
                                align="center"
                            >
                                <b>Yue Lao</b>
                            </Typography>
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "15px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                                align="center"
                            >
                                Having an ultimate romantic relationship is complicated, so to save the hassle we ask
                                Yue Lao for a red string to connect our future partner and a flourishing relationship.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("FortuneTelling")}
                    next={() => setDalogId("FortuneTelling")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
