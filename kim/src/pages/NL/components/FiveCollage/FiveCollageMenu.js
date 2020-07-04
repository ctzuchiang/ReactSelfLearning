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
        maxHeight: "45px",
        minWidth: "140px",
        width: "140px",
        maxWidth: "140px",
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

export default function FiveCollageMenu({ dalogId, setDalogId }) {
    const handleToggleChange = (e, selected) => {
        if (selected && dalogId !== selected) {
            setDalogId(selected);
        }
    };

    const [WeatherSelected, setWeatherSelected] = React.useState(false);

    React.useEffect(() => {
        if (dalogId === "Weather" || dalogId === "WeatherExample") {
            setWeatherSelected(true);
        } else {
            setWeatherSelected(false);
        }
    }, [dalogId]);
    
    return (
        <React.Fragment>
            <ToggleButtonGroup exclusive value={dalogId} onChange={handleToggleChange}>
                <DailogToggleButton selected={WeatherSelected} value="Weather">
                    <b>Weather</b>
                </DailogToggleButton>
                <DailogToggleButton value="Frugality">
                    <b>Frugality</b>
                </DailogToggleButton>
                <DailogToggleButton value="Sandwiches">
                    <b>Sandwiches</b>
                </DailogToggleButton>
            </ToggleButtonGroup>
        </React.Fragment>
    );
}
