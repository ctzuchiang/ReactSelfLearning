import React from "react";
import { DialogTitle, DialogContent, DialogActions, Typography, Box, DialogContentText } from "@material-ui/core";
import DialogActionGroup from "../../../DialogActionGroup";
import FirstCollageMenu from "./FirstCollageMenu";

export default function ExternalReclamation({ dalogId, setDalogId, setShowDialog }) {
    return (
        <React.Fragment>
            <DialogTitle>
                <Box display="flex" width="85vw">
                    <Box style={{ flexGrow: 1 }}>
                        <Typography style={{ color: "#094FA2", fontSize: "60px", WebkitTextStrokeWidth: 0 }}>
                            <b>External reclamation</b>
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <FirstCollageMenu dalogId={dalogId} setDalogId={setDalogId} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent style={{ marginTop: "-38px" }}>
                <Box maxWidth="50%" paddingBottom="8px">
                    <DialogContentText style={{ color: "#094FA2", fontSize: "20px" }}>
                        <b>
                            We were once very good at reclaiming lands from nature and the natives, but we don’t
                            practice that anymore, and we only have four oversea territories now.
                        </b>
                    </DialogContentText>
                </Box>
                <Box
                    padding="32px 32px"
                    bgcolor="#FFDCBF"
                    display="flex"
                    flexGrow={1}
                    flexDirection="column"
                    justifyContent="center"
                    marginBottom="16px"
                >
                    <Box display="flex" flexGrow={1} justifyContent="space-between">
                        <Box display="flex" width="25%" justifyContent="center" alignItems="center">
                            <img
                                style={{ position: "relative", width: "90px", height: "90px" }}
                                src="/pic/NL/Value/arub.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center" alignItems="center">
                            <img
                                style={{ position: "relative", width: "180px", height: "180px" }}
                                src="/pic/NL/Value/saba.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center" alignItems="center">
                            <img
                                style={{ position: "relative", width: "90px", height: "90px" }}
                                src="/pic/NL/Value/sint_maarten.png"
                                alt=""
                            />
                        </Box>
                        <Box display="flex" width="25%" justifyContent="center" alignItems="center">
                            <img
                                style={{ position: "relative", width: "180px", height: "180px" }}
                                src="/pic/NL/Value/curacao.png"
                                alt=""
                            />
                        </Box>
                    </Box>
                </Box>

                <Box display="flex" flexGrow={1} justifyContent="space-between">
                    <Box display="flex" width="23%" flexDirection="column">
                        <Typography
                            style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0, padding: "8px 0px" }}
                        >
                            <b>Aruba</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            Capital: Oranjestad
                            <br />
                            We reclaimed from the Spanish in 1636. Although it is under our kingdom, they gained
                            independence and more autonomy in 1983.
                        </Typography>
                    </Box>
                    <Box display="flex" width="23%" flexDirection="column">
                        <Typography
                            style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0, padding: "8px 0px" }}
                        >
                            <b>Caribbean Kingdom</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            Consist of: Bonaire, Sint Eustatius, and Saba.
                            <br />
                            Reclaimed by the VOC in 1636. These islands become part of our special municipality after
                            the referendum in 2010.
                        </Typography>
                    </Box>
                    <Box display="flex" width="23%" flexDirection="column">
                        <Typography
                            style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0, padding: "8px 0px" }}
                        >
                            <b>Sint Maarten</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            Capital: Philipsburg
                            <br />
                            Reclaimed in 1631 with a lovely port called Fort Amsterdam. We have to share this land with
                            French people because both of us want to claim it in 1648
                        </Typography>
                    </Box>
                    <Box display="flex" width="23%" flexDirection="column">
                        <Typography
                            style={{ color: "#094FA2", fontSize: "20px", WebkitTextStrokeWidth: 0, padding: "8px 0px" }}
                        >
                            <b>Curacao</b>
                        </Typography>
                        <Typography
                            style={{
                                color: "#094FA2",
                                fontSize: "15px",
                                WebkitTextStrokeWidth: 0,
                            }}
                        >
                            Capital: Willemstad
                            <br />
                            We also reclaimed from the Spanish in 1631. Their capital is protected by UNESCO world
                            heritage because it is full of architectures from our glorious time and bad behaviors
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <DialogActionGroup
                    setShowDialog={setShowDialog}
                    previous={() => setDalogId("Value")}
                    next={() => setDalogId("Monarchy")}
                />
            </DialogActions>
        </React.Fragment>
    );
}
