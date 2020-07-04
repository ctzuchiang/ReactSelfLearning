import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, DialogContentText, Box } from "@material-ui/core";
import DialogActionGroup from "../../../DialogActionGroup";
import FirstCollageMenu from "./FirstCollageMenu";

export default function Entertainments({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Our Entertainments</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FirstCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box maxWidth="50%">
                    <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                        <b>
                            We love our democracy and do not take it lightly, but we approach this concept like many
                            other new countries—with fist and rage. Besides gossip and celebrities, we also love to
                            watch our politicians engage aggressively in the house of flying sofa chairs.
                        </b>
                    </DialogContentText>
                </Box>
                <Box display="flex" justifyContent="center" bgcolor="#D9F0EF" padding="96px" marginTop="24px">
                    <Box>
                        <DialogContentText style={{ color: "#094FA2", fontSize: "30px" }}>
                            <b>The five branches in our constitution framework</b>
                        </DialogContentText>
                        <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                            <b>Executive Yuan, Legislative Yuan, Judicial Yuan, Control Yuan, Examination Yuan</b>
                        </DialogContentText>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("Value")}
                    next={() => setDalogId("TheBattleRing")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
