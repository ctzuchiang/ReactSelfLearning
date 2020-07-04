import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import DialogActionGroup from "../../../DialogActionGroup";
import SecondCollageMenu from "./SecondCollageMenu";

export default function GreyAreaExample({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Grey area examples</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <SecondCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent style={{ marginTop: "-28px" }}>
                <Box display="flex" bgcolor="#D9F0EF" padding="48px" flexDirection="column">
                    <Box display="flex" flexGrow={1}>
                        <Box
                            display="flex"
                            flexGrow={1}
                            // borderRight="2px solid #094FA2"
                            width="50%"
                            maxWidth="50%"
                            paddingRight="2vw"
                        >
                            <Box display="flex" justifyContent="center" alignItems="center" width="100%">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "550px",
                                        // maxHeight: "350px",
                                    }}
                                    src="/pic/TW/color/2.png"
                                    alt=""
                                />
                            </Box>
                        </Box>
                        <Box display="flex" flexGrow={1} width="50%" maxWidth="50%" paddingLeft="2vw">
                            <Box display="flex" justifyContent="center" alignItems="center" width="100%">
                                <img
                                    style={{
                                        position: "relative",
                                        width: "370px",
                                        // maxHeight: "350px",
                                    }}
                                    src="/pic/TW/color/5.png"
                                    alt=""
                                />
                            </Box>
                        </Box>
                    </Box>

                    <Box display="flex" flexGrow={1} justifyContent="center" paddingTop="16px">
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="column"
                            width="60%"
                        >
                            <Typography style={{ color: "#094FA2", fontSize: "25px", WebkitTextStrokeWidth: 0 }}>
                                <b>political rallies</b>
                            </Typography>
                            <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                                <b>
                                    According to law, we are not supposed to put anything on our flag, but some
                                    political supporters prefer to express their affection by being creative with the
                                    appearances of the national symbol.
                                </b>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("ColorSpecificationExample")}
                    next={() => setDalogId("ColorPallete")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
