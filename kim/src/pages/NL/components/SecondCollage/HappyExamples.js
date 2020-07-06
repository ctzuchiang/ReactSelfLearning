import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import SecondCollageMenu from "./SecondCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function HappyExamples({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Happy example</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <SecondCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box display="flex" bgcolor="#FFDCBF" padding="64px">
                    <Box
                        display="flex"
                        flexGrow={1}
                        width="33%"
                        maxWidth="33%"
                        flexDirection="column"
                        justifyContent="flex-end"
                    >
                        <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                            <b>Graduation</b>
                        </Typography>
                        <Typography style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0 }}>
                            We hang our flag and book bags in front of the house when we passed our final exam.
                        </Typography>
                    </Box>
                    <Box width="33%">
                        <img
                            style={{
                                position: "relative",
                                width: "400px",
                                paddingBottom: "24px",
                            }}
                            src="/pic/NL/color/Rectangle262@2x.png"
                            alt=""
                        />
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("ColorSpecification")}
                    next={() => setDalogId("ColorPallete")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
