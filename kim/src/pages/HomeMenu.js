import React from "react";
import { Popover, Box, Typography, withStyles } from "@material-ui/core";
import { ToggleButton } from "@material-ui/lab";
import { Link } from "react-router-dom";

const ED1C27Button = withStyles(() => ({
    root: {
        border: 0,
        width: "96px",
        height: "160px",
        backgroundColor: "#ED1C27",
        "&:hover": {
            backgroundColor: "#970109",
        },
    },
}))((props) => <ToggleButton component={Link} disableRipple {...props} />);

const AE1C28Button = withStyles(() => ({
    root: {
        border: 0,
        width: "96px",
        height: "160px",
        backgroundColor: "#AE1C28",
        "&:hover": {
            backgroundColor: "#970109",
        },
    },
}))((props) => <ToggleButton component={Link} disableRipple {...props} />);

const FF0000Button = withStyles(() => ({
    root: {
        border: 0,
        width: "96px",
        height: "160px",
        backgroundColor: "#FF0000",
        "&:hover": {
            backgroundColor: "#970109",
        },
    },
}))((props) => <ToggleButton component={Link} disableRipple {...props} />);

export default function HomeMenu({ anchorEl, setAnchorEl }) {
    return (
        <Popover
            open={anchorEl}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
        >
            <Box display="flex" flexDirection="column" padding="8px">
                <Box paddingBottom="8px">
                    <Typography
                        style={{
                            WebkitTextStrokeWidth: "1px",
                            WebkitTextStrokeColor: "#ed1c27",
                            fontSize: "2vw",
                            color: "#FFFFFF",
                            fontFamily: "Helvetica Neue",
                        }}
                    >
                        We Bled In <br />
                        the Color <br />
                        Of #_________
                    </Typography>
                </Box>
                <Box>
                    <Box display="flex">
                        <ED1C27Button to="/NK" value="/NK">
                            <Typography
                                style={{
                                    color: "#FFFFFF",
                                    fontSize: "16px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                            >
                                #ED1C27
                            </Typography>
                        </ED1C27Button>
                        <AE1C28Button to="/NL" value="/NL">
                            <Typography
                                style={{
                                    color: "#FFFFFF",
                                    fontSize: "16px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                            >
                                #AE1C28
                            </Typography>
                        </AE1C28Button>
                        <FF0000Button to="/TW" value="/TW">
                            <Typography
                                style={{
                                    color: "#FFFFFF",
                                    fontSize: "16px",
                                    WebkitTextStrokeWidth: 0,
                                }}
                            >
                                #FF0000
                            </Typography>
                        </FF0000Button>
                    </Box>
                </Box>
            </Box>
        </Popover>
    );
}
