import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box } from "@material-ui/core";
import DialogActionGroup from "../../../DialogActionGroup";
import FirstCollageMenu from "./FirstCollageMenu";

export default function TheBattleRing({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>The battle ring</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FirstCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
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
                            width: "560px",
                            paddingBottom: "20px",
                        }}
                        src="/pic/TW/entertainment/1.png"
                        alt=""
                    />
                    <Box width="50%">
                        <Typography
                            style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}
                            align="center"
                            gutterBottom
                        >
                            <b>Legislative Yuan</b>
                        </Typography>
                        <Typography
                            style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0 }}
                            align="center"
                        >
                            Initially, the highest legislative organ of our country and exercises legislative power on
                            behalf of the people. However, the 113 members of the legislative Yuan often play a role
                            during the questioning and engage in physical fights like reality tv shows.
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("Entertainments")}
                    next={() => setDalogId("EntertainmentValue")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
