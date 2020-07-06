import React from "react";
import { Dialog, withStyles } from "@material-ui/core";
import Value from "./components/FirstCollage/Value";
import ExternalReclamation from "./components/FirstCollage/ExternalReclamation";
import Monarchy from "./components/FirstCollage/Monarchy";
import RoyalExampleOne from "./components/FirstCollage/RoyalExampleOne";
import RoyalExampleTwo from "./components/FirstCollage/RoyalExampleTwo";
import ColorPallete from "./components/SecondCollage/ColorPallete";
import ColorSpecification from "./components/SecondCollage/ColorSpecification";
import ShadesVariation from "./components/SecondCollage/ShadesVariation";
import CoatOfArms from "./components/ThirdCollage/CoatOfArms";
import Sports from "./components/FourCollage/Sports";
import FourTypography from "./components/FourCollage/FourTypography";
import ToneOfVoice from "./components/FourCollage/ToneOfVoice";
import Weather from "./components/FiveCollage/Weather";
import WeatherExample from "./components/FiveCollage/WeatherExample";
import Frugality from "./components/FiveCollage/Frugality";
import Sandwiches from "./components/FiveCollage/Sandwiches";
import OfficailVariation from "./components/ThirdCollage/OfficailVariation";
import NoneOfficailVariation from "./components/ThirdCollage/NoneOfficailVariation";
import HappyExamples from "./components/SecondCollage/HappyExamples";

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
    // setDalogId("NoneOfficailVariation");
    return (
        <React.Fragment>
            <StyleDialog open={showDialog} onClose={() => setShowDialog(false)}>
                {dalogId === "Value" && (
                    <Value dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "ExternalReclamation" && (
                    <ExternalReclamation dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "Monarchy" && (
                    <Monarchy dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "RoyalExampleOne" && (
                    <RoyalExampleOne dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "RoyalExampleTwo" && (
                    <RoyalExampleTwo dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "ColorPallete" && (
                    <ColorPallete dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "ColorSpecification" && (
                    <ColorSpecification dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "ShadesVariation" && (
                    <ShadesVariation dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "CoatOfArms" && (
                    <CoatOfArms dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "Sports" && (
                    <Sports dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "FourTypography" && (
                    <FourTypography dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "ToneOfVoice" && (
                    <ToneOfVoice dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "Weather" && (
                    <Weather dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "WeatherExample" && (
                    <WeatherExample dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "Frugality" && (
                    <Frugality dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "Sandwiches" && (
                    <Sandwiches dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "OfficailVariation" && (
                    <OfficailVariation dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "NoneOfficailVariation" && (
                    <NoneOfficailVariation dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "HappyExamples" && (
                    <HappyExamples dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
            </StyleDialog>
        </React.Fragment>
    );
}
