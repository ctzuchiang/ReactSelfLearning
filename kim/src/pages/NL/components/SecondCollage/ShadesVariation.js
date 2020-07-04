import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import SecondCollageMenu from "./SecondCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function ShadesVariation({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Shades Variation</b>
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
                            width: "70%",
                            // marginRight: "112px",
                            paddingBottom: "8px",
                        }}
                        src="/pic/NL/color/color variation@2x.png"
                        alt=""
                    />
                    
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("ColorPallete")}
                    next={() => setDalogId("ColorSpecification")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
