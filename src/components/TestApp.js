import React from "react";
import UserInfo from "./UserInfo";
import Clock from "./Clock";
import Reservation from "./Reservation";
import { NameForm, EssayForm, FlavorForm, MultiSelectForm } from "./FormSample";
import { ActionLink, Toggle } from "./ActionLink";
import LoginControl from "./LoginControl";
import WarningPage from "./WarningBanner";
import ListSample from "./ListSample";
import Blog from "./Blog";
import BoilingCalculator from "./BollingWater";
import WelcomeDialog from "./WelcomeDialog";
import SplitPaneSample from "./SplitPaneSample";

function TestApp() {
  const element = (
    <div>
      {UserInfo}
      <Clock />
      <ActionLink />
      <Toggle />
      <LoginControl />,
      <WarningPage />
      <ListSample />
      <Blog />
      <NameForm />
      <EssayForm />
      <FlavorForm />
      <MultiSelectForm />
      <Reservation />
      <input type='file' />
      <BoilingCalculator />
      <WelcomeDialog />
      <SplitPaneSample />
    </div>
  );
  return element;
}

export default TestApp;
