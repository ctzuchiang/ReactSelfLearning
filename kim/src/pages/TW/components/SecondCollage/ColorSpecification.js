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
                            <b>Color Usage examples</b>
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
                            marginRight: "72px",
                        }}
                        src="/pic/TW/color/3.png"
                        alt=""
                    />
                    <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                        <b>WxH ratio: 2:3</b>
                    </Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("ShadesVariation")}
                    next={() => setDalogId("ColorSpecificationExample")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
