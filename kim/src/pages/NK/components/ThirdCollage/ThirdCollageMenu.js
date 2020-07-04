import React from "react";
import { withStyles } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

const DailogToggleButton = withStyles((theme) => ({
    root: {
        WebkitTextStrokeWidth: 0,
        border: `2px solid ${theme.palette.divider}`,
        color: "#094FA2",
        backgroundColor: "#e0e0e0",
        fontSize: "14px",
        maxHeight: "35px",
        minWidth: "110px",
        width: "110px",
        maxWidth: "110px",
        "&$selected": {
            WebkitTextStrokeWidth: 0,
            color: "#FFFFFF",
            backgroundColor: "#094FA2",
            "&:hover": {
                backgroundColor: "#08498E",
            },
        },
        "&:hover": {
            backgroundColor: "#d5d5d5",
        },
    },
    selected: {},
}))(ToggleButton);

export default function ThirdCollageMenu({ dalogId, setDalogId }) {
    const handleToggleChange = (e, selected) => {
        if (selected && dalogId !== selected) {
            setDalogId(selected);
        }
    };
    const [LogoSelected, setLogoSelected] = React.useState(false);
    const [EmblemSelected, setEmblemSelected] = React.useState(false);

    React.useEffect(() => {
        if (dalogId === "Logo" || dalogId === "LogoExampleOne" || dalogId === "LogoExampleTwo") {
            setLogoSelected(true);
        } else {
            setLogoSelected(false);
        }
        if (dalogId === "Emblem" || dalogId === "EmblemExample") {
            setEmblemSelected(true);
        } else {
            setEmblemSelected(false);
        }
    }, [dalogId]);

    return (
        <React.Fragment>
            <ToggleButtonGroup exclusive value={dalogId} onChange={handleToggleChange}>
                <DailogToggleButton selected={LogoSelected} value="Logo">
                    <b>Logo</b>
                </DailogToggleButton>
                <DailogToggleButton selected={EmblemSelected} value="Emblem">
                    <b>Emblem</b>
                </DailogToggleButton>
                <DailogToggleButton value="Landmarks">
                    <b>Landmarks</b>
                </DailogToggleButton>
            </ToggleButtonGroup>
        </React.Fragment>
    );
}
