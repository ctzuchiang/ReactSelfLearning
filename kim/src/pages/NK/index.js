import React from "react";
import "../../css/style.css";
import { Box, IconButton, makeStyles, Drawer, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DialogBox from "./DialogBox";
import { Helmet } from "react-helmet";
import HomeMenu from "../HomeMenu";

const Title = "#ED1C27";
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

export default function NK() {
    const classes = useStyles();

    const [showDialog, setShowDialog] = React.useState(false);
    const [dalogId, setDalogId] = React.useState("");

    const [anchorEl, setAnchorEl] = React.useState(null);

    const favicon = document.getElementById("favicon");
    favicon.href = "/NK.ico";

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
                        <MenuIcon style={{ color: "#ed1c27" }} fontSize="large" />
                    </IconButton>
                    <Typography
                        style={{
                            WebkitTextStrokeColor: "#ed1c27",
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
                                color: "#ed1c27",
                                textDecoration: "underline",
                                fontWeight: 200,
                                WebkitTextStrokeColor: "#ed1c27",
                            }}
                        >
                            ed1c27
                        </strong>
                    </Typography>
                </Box>
            </Drawer>

            <div class="grid-base">
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
                            id="land"
                            src="/pic/NK/map.png"
                            alt=""
                            onMouseOver={(e) => (e.currentTarget.src = "/pic/NK/map_a.png")}
                            onMouseOut={(e) => (e.currentTarget.src = "/pic/NK/map.png")}
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
                        id="flag"
                        src="/pic/NK/flag.png"
                        onMouseOver={(e) => (e.currentTarget.src = "/pic/NK/flag_a.png")}
                        onMouseOut={(e) => (e.currentTarget.src = "/pic/NK/flag.png")}
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
                        setDalogId("Logo");
                        setShowDialog(true);
                    }}
                >
                    <img
                        id="logo"
                        src="/pic/NK/NK_LOGO_FIN.png"
                        onMouseOver={(e) => (e.currentTarget.src = "/pic/NK/NK_LOGO_FIN_a.png")}
                        onMouseOut={(e) => (e.currentTarget.src = "/pic/NK/NK_LOGO_FIN.png")}
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
                        setDalogId("FourTypography");
                        setShowDialog(true);
                    }}
                >
                    <img
                        id="typo"
                        src="/pic/NK/typo.png"
                        alt=""
                        onMouseOver={(e) => (e.currentTarget.src = "/pic/NK/typo_a.png")}
                        onMouseOut={(e) => (e.currentTarget.src = "/pic/NK/typo.png")}
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
                        setDalogId("ToneOfVoice");
                        setShowDialog(true);
                    }}
                >
                    <img
                        id="gary"
                        src="/pic/NK/gary.png"
                        alt=""
                        onMouseOver={(e) => (e.currentTarget.src = "/pic/NK/gary_a.png")}
                        onMouseOut={(e) => (e.currentTarget.src = "/pic/NK/gary.png")}
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
