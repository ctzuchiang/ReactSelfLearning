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

export default function SecondCollageMenu({ dalogId, setDalogId }) {
    const handleToggleChange = (e, selected) => {
        if (selected && dalogId !== selected) {
            setDalogId(selected);
        }
    };

    const [ColorPalleteSelected, setColorPalleteSelected] = React.useState(false);
    const [ColorSpecificationSelected, setColorSpecificationSelected] = React.useState(false);

    React.useEffect(() => {
        if (dalogId === "ColorPallete" || dalogId === "ShadesVariation") {
            setColorPalleteSelected(true);
        } else {
            setColorPalleteSelected(false);
        }
        if (
            dalogId === "ColorSpecification" ||
            dalogId === "ColorSpecificationExample" ||
            dalogId === "GreyAreaExample"
        ) {
            setColorSpecificationSelected(true);
        } else {
            setColorSpecificationSelected(false);
        }
    }, [dalogId]);

    return (
        <React.Fragment>
            <ToggleButtonGroup exclusive value={dalogId} onChange={handleToggleChange}>
                <DailogToggleButton selected={ColorPalleteSelected} value="ColorPallete">
                    <b>Color Pallete</b>
                </DailogToggleButton>
                <DailogToggleButton selected={ColorSpecificationSelected} value="ColorSpecification">
                    <b>Color Specification</b>
                </DailogToggleButton>
            </ToggleButtonGroup>
        </React.Fragment>
    );
}
