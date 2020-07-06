import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import SecondCollageMenu from "./SecondCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function ColorSpecification({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Color Specification</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <SecondCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box
                    display="flex"
                    bgcolor="#FFDCBF"
                    padding="64px"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img
                        style={{
                            position: "relative",
                            width: "600px",
                            paddingBottom: "24px",
                        }}
                        src="/pic/NL/color/flag@2x.png"
                        alt=""
                    />
                    <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                        <b>Proportion 2:3 (adjustable)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Color ratio 1:1:1</b>
                    </Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("ShadesVariation")}
                    next={() => setDalogId("HappyExamples")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
