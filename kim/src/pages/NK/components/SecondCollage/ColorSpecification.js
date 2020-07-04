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
                    bgcolor="#FDD1D3"
                    padding="32px"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img
                        style={{
                            position: "relative",
                            width: "55%",
                            marginRight: "112px",
                            paddingBottom: "8px",
                        }}
                        src="/pic/NK/group.png"
                        alt=""
                    />
                    <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                        <b>WxH ratio: 2:1</b>
                    </Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("ColorPallete")}
                    next={() => setDalogId("ColorPallete")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
