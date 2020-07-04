import React from "react";
import "../../css/style_tw.css";
import { Box, IconButton, makeStyles, Typography, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DialogBox from "./DialogBox";
import { Helmet } from "react-helmet";
import HomeMenu from "../HomeMenu";

const Title = "#FF0000";

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

export default function TW() {
    const classes = useStyles();

    const [showDialog, setShowDialog] = React.useState(false);
    const [dalogId, setDalogId] = React.useState("");

    const [anchorEl, setAnchorEl] = React.useState(null);

    const favicon = document.getElementById("favicon");
    favicon.href = "/TW.ico";

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
                        <MenuIcon style={{ color: "#ff0000" }} fontSize="large" />
                    </IconButton>
                    <Typography
                        style={{
                            WebkitTextStrokeColor: "#ff0000",
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
                                color: "#ff0000",
                                textDecoration: "underline",
                                fontWeight: 200,
                                WebkitTextStrokeColor: "#ff0000",
                            }}
                        >
                            ff0000
                        </strong>
                    </Typography>
                </Box>
            </Drawer>

            <div class="grid-base-tw">
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
                            id="land_tw"
                            src="/pic/TW/1.png"
                            alt=""
                            onMouseOver={(e) => (e.currentTarget.src = "/pic/TW/1_a.png")}
                            onMouseOut={(e) => (e.currentTarget.src = "/pic/TW/1.png")}
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
                        id="flag_tw"
                        src="/pic/TW/2.png"
                        onMouseOver={(e) => (e.currentTarget.src = "/pic/TW/2_a.png")}
                        onMouseOut={(e) => (e.currentTarget.src = "/pic/TW/2.png")}
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
                        setDalogId("Symbol");
                        setShowDialog(true);
                    }}
                >
                    <img
                        id="logo_tw"
                        src="/pic/TW/3.png"
                        onMouseOver={(e) => (e.currentTarget.src = "/pic/TW/3_a.png")}
                        onMouseOut={(e) => (e.currentTarget.src = "/pic/TW/3.png")}
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
                        setDalogId("ToneOfVoice");
                        setShowDialog(true);
                    }}
                >
                    <img
                        id="typo_tw"
                        src="/pic/TW/4.png"
                        alt=""
                        onMouseOver={(e) => (e.currentTarget.src = "/pic/TW/4_a.png")}
                        onMouseOut={(e) => (e.currentTarget.src = "/pic/TW/4.png")}
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
                        setDalogId("Spirituality");
                        setShowDialog(true);
                    }}
                >
                    <img
                        id="gary_tw"
                        src="/pic/TW/5.png"
                        alt=""
                        onMouseOver={(e) => (e.currentTarget.src = "/pic/TW/5_a.png")}
                        onMouseOut={(e) => (e.currentTarget.src = "/pic/TW/5.png")}
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
