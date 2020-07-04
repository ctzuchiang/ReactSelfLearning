import React from "react";
import "../../css/style_nl.css";
import { Box, IconButton, Typography, Drawer, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DialogBox from "./DialogBox";
import { Helmet } from "react-helmet";
import HomeMenu from "../HomeMenu";

const Title = "#AE1C28";

const drawerWidth = 135;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "transparent",
        border: 0,
    },
}));

export default function NL() {
    const classes = useStyles();

    const [showDialog, setShowDialog] = React.useState(false);
    const [dalogId, setDalogId] = React.useState("");

    const [anchorEl, setAnchorEl] = React.useState(null);

    const favicon = document.getElementById("favicon");
    favicon.href = "/NL.ico";

    return (
        <React.Fragment>
            <Helmet>
                <title>{Title}</title>
            </Helmet>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right"
            >
                <Box display="flex" flexDirection="column" alignItems="center">
                    <IconButton
                        onClick={(event) => {
                            setAnchorEl(event.currentTarget);
                        }}
                    >
                        <MenuIcon style={{ color: "#ae1c28" }} fontSize="large" />
                    </IconButton>
                    <Typography
                        style={{
                            WebkitTextStrokeColor: "#ae1c28",
                            WebkitTextStrokeWidth: "1px",
                            color: "#FFFFFF",
                            fontSize: "2vw",
                            writingMode: "vertical-rl",
                            fontFamily: "Helvetica Neue",
                            lineHeight: "3.5em",
                            fontWeight: "bold",
                        }}
                    >
                        We Bled In The Color of #
                        <strong
                            style={{
                                color: "#ae1c28",
                                textDecoration: "underline",
                                fontWeight: 200,
                                WebkitTextStrokeColor: "#ae1c28",
                            }}
                        >
                            ae1c28
                        </strong>
                    </Typography>
                </Box>
            </Drawer>

            <div class="grid-base-nl">
                <div class="country">
                    <Box
                        class="land"
                        style={{
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            setDalogId("Value");
                            setShowDialog(true);
                        }}
                    >
                        <img
                            id="land-nl"
                            src="/pic/NL/1.png"
                            alt=""
                            onMouseOver={(e) => (e.currentTarget.src = "/pic/NL/1_a.png")}
                            onMouseOut={(e) => (e.currentTarget.src = "/pic/NL/1.png")}
                        />
                    </Box>
                    In the land
                    <br />
                    of ___________,
                </div>
                <Box
                    class="flag"
                    style={{
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        setDalogId("ColorPallete");
                        setShowDialog(true);
                    }}
                >
                    <img
                        id="flag-nl"
                        src="/pic/NL/2.png"
                        onMouseOver={(e) => (e.currentTarget.src = "/pic/NL/2_a.png")}
                        onMouseOut={(e) => (e.currentTarget.src = "/pic/NL/2.png")}
                        alt=""
                    />
                    we cherish and value <br />
                    the spirit of ______________.
                </Box>
                <div class="logo_1">
                    Here, our forefathers
                    <br />
                    gathered and united,
                </div>
                <Box
                    class="logo_pic"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        setDalogId("CoatOfArms");
                        setShowDialog(true);
                    }}
                >
                    <img
                        id="logo-nl"
                        src="/pic/NL/3.png"
                        onMouseOver={(e) => (e.currentTarget.src = "/pic/NL/3_a.png")}
                        onMouseOut={(e) => (e.currentTarget.src = "/pic/NL/3.png")}
                        alt=""
                    />
                </Box>

                <div class="logo"> their______________ become our heritage.</div>
                <div class="typo">
                    and we follow their
                    <br />
                    footsteps on __________.
                </div>
                <Box
                    class="typo_pic"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        setDalogId("Sports");
                        setShowDialog(true);
                    }}
                >
                    <img
                        id="typo-nl"
                        src="/pic/NL/4.png"
                        alt=""
                        onMouseOver={(e) => (e.currentTarget.src = "/pic/NL/4_a.png")}
                        onMouseOut={(e) => (e.currentTarget.src = "/pic/NL/4.png")}
                    />
                </Box>
                <div class="gary_1">
                    Their integrity connects our <br /> past, present and future,
                </div>
                <div class="gary">
                    so that we can <br /> fulfill our _____________
                </div>
                <Box
                    class="gary_pic"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        setDalogId("Weather");
                        setShowDialog(true);
                    }}
                >
                    <img
                        id="gary-nl"
                        src="/pic/NL/5.png"
                        alt=""
                        onMouseOver={(e) => (e.currentTarget.src = "/pic/NL/5_a.png")}
                        onMouseOut={(e) => (e.currentTarget.src = "/pic/NL/5.png")}
                    />
                </Box>
                <div class="comi">
                    at this place where we <br /> perceive as our community.
                </div>
            </div>
            <HomeMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
            <DialogBox
                showDialog={showDialog}
                setShowDialog={setShowDialog}
                dalogId={dalogId}
                setDalogId={setDalogId}
            />
        </React.Fragment>
    );
}
