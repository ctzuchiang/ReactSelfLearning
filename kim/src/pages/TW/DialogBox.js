import React from "react";
import { Dialog, withStyles } from "@material-ui/core";
import Value from "./components/FirstCollage/Value";
import Entertainments from "./components/FirstCollage/Entertainments";
import TheBattleRing from "./components/FirstCollage/TheBattleRing";
import EntertainmentValue from "./components/FirstCollage/EntertainmentValue";
import ColorPallete from "./components/SecondCollage/ColorPallete";
import ColorSpecification from "./components/SecondCollage/ColorSpecification";
import ShadesVariation from "./components/SecondCollage/ShadesVariation";
import ColorSpecificationExample from "./components/SecondCollage/ColorSpecificationExample";
import GreyAreaExample from "./components/SecondCollage/GreyAreaExample";
import Symbol from "./components/ThirdCollage/Symbol";
import SymbolExample from "./components/ThirdCollage/SymbolExample";
import PoliticalFigures from "./components/ThirdCollage/PoliticalFigures";
import PoliticalFiguresExample from "./components/ThirdCollage/PoliticalFiguresExample";
import ControversialExample from "./components/ThirdCollage/ControversialExample";
import EdibleStatement from "./components/ThirdCollage/EdibleStatement";
import ToneOfVoice from "./components/FourCollage/ToneOfVoice";
import FourTypography from "./components/FourCollage/FourTypography";
import FourTypographyExample from "./components/FourCollage/FourTypographyExample";
import FourTypographyExampleTwo from "./components/FourCollage/FourTypographyExampleTwo";
import Spirituality from "./components/FiveCollage/Spirituality";
import FortuneTelling from "./components/FiveCollage/FortuneTelling";

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
    // setDalogId("FortuneTelling");
    return (
        <React.Fragment>
            <StyleDialog open={showDialog} onClose={() => setShowDialog(false)}>
                {dalogId === "Value" && (
                    <Value dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "Entertainments" && (
                    <Entertainments dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "TheBattleRing" && (
                    <TheBattleRing dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "EntertainmentValue" && (
                    <EntertainmentValue dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "ColorPallete" && (
                    <ColorPallete dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "ShadesVariation" && (
                    <ShadesVariation dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "ColorSpecification" && (
                    <ColorSpecification dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "ColorSpecificationExample" && (
                    <ColorSpecificationExample
                        dalogId={dalogId}
                        setDalogId={setDalogId}
                        setShowDialog={setShowDialog}
                    />
                )}
                {dalogId === "GreyAreaExample" && (
                    <GreyAreaExample dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "Symbol" && (
                    <Symbol dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "SymbolExample" && (
                    <SymbolExample dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "PoliticalFigures" && (
                    <PoliticalFigures dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "PoliticalFiguresExample" && (
                    <PoliticalFiguresExample dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "ControversialExample" && (
                    <ControversialExample dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "EdibleStatement" && (
                    <EdibleStatement dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "ToneOfVoice" && (
                    <ToneOfVoice dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "FourTypography" && (
                    <FourTypography dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "FourTypographyExample" && (
                    <FourTypographyExample dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "FourTypographyExampleTwo" && (
                    <FourTypographyExampleTwo dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "Spirituality" && (
                    <Spirituality dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
                {dalogId === "FortuneTelling" && (
                    <FortuneTelling dalogId={dalogId} setDalogId={setDalogId} setShowDialog={setShowDialog} />
                )}
            </StyleDialog>
        </React.Fragment>
    );
}
