import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import DialogActionGroup from "../../../DialogActionGroup";
import SecondCollageMenu from "./SecondCollageMenu";

export default function ColorSpecificationExample({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Color usage proper examples</b>
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
                    bgcolor="#D9F0EF"
                    padding="32px"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img
                        style={{
                            position: "relative",
                            width: "580px",
                            paddingBottom: "12px",
                        }}
                        src="/pic/TW/color/4.png"
                        alt=""
                    />
                    <Box width="50%">
                        <Typography
                            style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}
                            align="center"
                            gutterBottom
                        >
                            <b>flag raising ceromony</b>
                        </Typography>
                        <Typography
                            style={{ color: "#094FA2", fontSize: "18px", WebkitTextStrokeWidth: 0 }}
                            align="center"
                        >
                            Part of the daily routine in many private and public sectors.
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("ColorSpecification")}
                    next={() => setDalogId("GreyAreaExample")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
