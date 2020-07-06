import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import DialogActionGroup from "../../../DialogActionGroup";
import SecondCollageMenu from "./SecondCollageMenu";

export default function UnquestionableUsageExample({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>unquestionable usage example</b>
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
                    padding="64px"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <img
                        style={{
                            position: "relative",
                            width: "750px",
                            paddingBottom: "12px",
                        }}
                        src="/pic/NK/presidential@2x.png"
                        alt=""
                    />
                    <Typography
                        style={{
                            color: "#094FA2",
                            fontSize: "20px",
                            WebkitTextStrokeWidth: 0,
                        }}
                        align="center"
                        gutterBottom
                    >
                        <b>presidential palace</b>
                    </Typography>
                    <Typography
                        style={{
                            color: "#094FA2",
                            fontSize: "15px",
                            WebkitTextStrokeWidth: 0,
                        }}
                        align="center"
                    >
                        Kumsusan Palace of the Sun, also the presidential palace
                    </Typography>
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
