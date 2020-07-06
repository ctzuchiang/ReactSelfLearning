import React from "react";
import { DialogTitle, DialogActions, Typography, DialogContentText, Box } from "@material-ui/core";
import FirstCollageMenu from "./FirstCollageMenu";
import DialogActionGroup from "../../../DialogActionGroup";

export default function Socialism({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>Socialism</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FirstCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContentText style={{ padding: "0px 32px" }}>
                <Box display="flex" padding="10px 64px" bgcolor="#FDD1D3" alignItems="center" marginTop="-18px">
                    <img
                        width="400px"
                        height="300px"
                        src="/pic/NK/social.png"
                        alt=""
                        style={{ position: "relative", padding: "3% 0px" }}
                    />
                    <Typography style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0 }}>
                        <b>
                            The socialism of our own style is a revolutionary contribution to national and international
                            thought. The great leader developed the original and brilliant Juche Ideology for our people
                            and the world. We achieve pure socialism and become powerful and self-reliant by only acting
                            according to the masters of revolutions and construction.
                        </b>
                    </Typography>
                </Box>
                <Typography
                    style={{
                        color: "#094FA2",
                        fontSize: "25px",
                        WebkitTextStrokeWidth: 0,
                        padding: "12px 0px",
                    }}
                >
                    <b>Goal</b>
                </Typography>
                <Box display="flex" justifyContent="space-between">
                    <Box width="25%" paddingRight="16px">
                        <Typography
                            style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0, lineHeight: 1.4 }}
                        >
                            1. Our Juche ideology places the mass in the center as the driving force, and in the middle
                            of the greater mass is our great leader. We do not think for ourselves, but to think through
                            the great leader.
                        </Typography>
                    </Box>
                    <Box width="25%" paddingRight="16px">
                        <Typography
                            style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0, lineHeight: 1.4 }}
                        >
                            2. By following the Juche philosophy, we will achieve self-reliance in defense, political
                            independence, and economic self-sustenance in the near future.
                        </Typography>
                    </Box>
                    <Box width="25%" paddingRight="16px">
                        <Typography
                            style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0, lineHeight: 1.4 }}
                        >
                            3. Unlike failed attempts of marxism, our social classes are constructed into a mass of
                            people who are theoretically all equal. Peasants, workers, and intellectuals are all
                            important in our society.
                        </Typography>
                    </Box>
                    <Box width="25%">
                        <Typography
                            style={{ color: "#094FA2", fontSize: "15px", WebkitTextStrokeWidth: 0, lineHeight: 1.4 }}
                        >
                            4. The Juche Philosophy is the safeguard to our revolutions and socialism of our style. Our
                            military-first politics will inevitably achieve victory and will never be defeated
                        </Typography>
                    </Box>
                </Box>
            </DialogContentText>

            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("Value")}
                    next={() => setDalogId("Religion")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
