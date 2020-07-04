import React from "react";
import { Dialog, withStyles } from "@material-ui/core";
import Value from "./components/FirstCollage/Value";
import Socialism from "./components/FirstCollage/Socialism";
import Religion from "./components/FirstCollage/Religion";
import Advancement from "./components/FirstCollage/Advancement";
import ColorPallete from "./components/SecondCollage/ColorPallete";
import ColorSpecification from "./components/SecondCollage/ColorSpecification";
import Logo from "./components/ThirdCollage/Logo";
import Emblem from "./components/ThirdCollage/Emblem";
import Landmarks from "./components/ThirdCollage/Landmarks";
import FourTypography from "./components/FourCollage/FourTypography";
import Holidays from "./components/FourCollage/Holidays";
import LogoExampleOne from "./components/ThirdCollage/LogoExampleOne";
import LogoExampleTwo from "./components/ThirdCollage/LogoExampleTwo";
import EmblemExample from "./components/ThirdCollage/EmblemExample";
import SanSerifExampleOne from "./components/FourCollage/SanSerifExampleOne";
import SanSerifExampleTwo from "./components/FourCollage/SanSerifExampleTwo";
import ToneOfVoice from "./components/FiveCollage/ToneOfVoice";
import PropperAttire from "./components/FiveCollage/PropperAttire";
import Grooming from "./components/FiveCollage/Grooming";

const StyleDialog = withStyles(() => ({
    paper: {
        minWidth: "90vw",
        height: "85vh",
        border: `3px solid #094FA2`,
        padding: "32px",
    },
}))(Dialog);

export default function DialogBox({ showDialog, setShowDialog, dalogId, setDalogId }) {
    // setShowDialog(true);
    // setDalogId("PropperAttire");
    return (
        <React.Fragment>
            <StyleDialog open={showDialog} onClose={() => setShowDialog(false)}>
                {dalogId === "Value" && (
                    <Value dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "Socialism" && (
                    <Socialism dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "Religion" && (
                    <Religion dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "Advancement" && (
                    <Advancement dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "ColorPallete" && (
                    <ColorPallete dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "ColorSpecification" && (
                    <ColorSpecification dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "Logo" && <Logo dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />}
                {dalogId === "LogoExampleOne" && (
                    <LogoExampleOne dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "LogoExampleTwo" && (
                    <LogoExampleTwo dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "Emblem" && (
                    <Emblem dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "EmblemExample" && (
                    <EmblemExample dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "Landmarks" && (
                    <Landmarks dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "FourTypography" && (
                    <FourTypography dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "SanSerifExampleOne" && (
                    <SanSerifExampleOne dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "SanSerifExampleTwo" && (
                    <SanSerifExampleTwo dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "Holidays" && (
                    <Holidays dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "ToneOfVoice" && (
                    <ToneOfVoice dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "PropperAttire" && (
                    <PropperAttire dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "Grooming" && (
                    <Grooming dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
            </StyleDialog>
        </React.Fragment>
    );
}
