import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, DialogContentText, Box } from "@material-ui/core";
import FirstCollageMenu from "./FirstCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function Religion({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Our Religion</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FirstCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box display="flex">
                    <Box maxWidth="50%" paddingRight="12px">
                        <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                            <b>
                                We are atheists and do not believe in spirituality. Our enchantments only reserved for
                                the great leader and the Mount Baekdu bloodline. They are more than the leader to us.
                                They are our gods.
                           </b>
                        </DialogContentText>
                    </Box>
                    <Box maxWidth="50%" paddingLeft="12px">
                        <Box padding="24px" bgcolor="#FDD1D3">
                            <Typography
                                style={{
                                    color: "#094FA2",
                                    fontSize: "30px",
                                    WebkitTextStrokeWidth: 0,
                                    paddingBottom: "25px",
                                }}
                            >
                                <b>We Believe</b>
                            </Typography>
                            <DialogContentText
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                }}
                            >
                                <b>
                                    The Supreme Leader invented the Minju Joson, a brand-new sandwich called doubled
                                    bread with meat.
                               </b>
                            </DialogContentText>
                            <DialogContentText
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                }}
                            >
                                <b>
                                    Only mortals use the toilet. The Mount Baekdu bloodline does not need to urinate or
                                    defecate.
                               </b>
                            </DialogContentText>
                            <DialogContentText
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                }}
                            >
                                <b>
                                    The Great successor reclaims time (30 minutes) back from the Japanese colonization.
                               </b>
                            </DialogContentText>
                            <DialogContentText
                                style={{
                                    color: "#094FA2",
                                    fontSize: "20px",
                                }}
                            >
                                <b>
                                    The Supreme Commander was born on Mount Baekdu. At the moment of his birth, a new
                                    star formed and illuminated the sky.
                               </b>
                            </DialogContentText>
                            <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                                <b>
                                    The Great Successor is an international fashion icon. People adore his hairstyle and
                                    copied it everywhere
                               </b>
                            </DialogContentText>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("Socialism")}
                    next={() => setDalogId("Advancement")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
