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
        minWidth: "120px",
        width: "120px",
        maxWidth: "120px",
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

export default function FirstCollageMenu({ dalogId, setDalogId }) {
    const handleToggleChange = (e, selected) => {
        if (selected && dalogId !== selected) {
            setDalogId(selected);
        }
    };

    const [EntertainmentsSelected, setEntertainmentsSelected] = React.useState(false);

    React.useEffect(() => {
        if (dalogId === "Entertainments" || dalogId === "TheBattleRing"|| dalogId === "EntertainmentValue") {
            setEntertainmentsSelected(true);
        } else {
            setEntertainmentsSelected(false);
        }
   
    }, [dalogId]);
    return (
        <React.Fragment>
            <ToggleButtonGroup exclusive value={dalogId} onChange={handleToggleChange}>
                <DailogToggleButton value="Value">
                    <b>Value</b>
                </DailogToggleButton>
                <DailogToggleButton selected={EntertainmentsSelected} value="Entertainments">
                    <b>Entertainments</b>
                </DailogToggleButton>
            </ToggleButtonGroup>
        </React.Fragment>
    );
}
