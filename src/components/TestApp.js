import React from "react";
import UserInfo from "./UserInfo";
import Clock from "./Clock";
import { ActionLink, Toggle } from "./ActionLink";
import LoginControl from "./LoginControl";
import WarningPage from "./WarningBanner";

function TestApp() {
  const element = (
    <div>
      {UserInfo}
      <Clock />
      <ActionLink />
      <Toggle />
      <LoginControl />,
      <WarningPage />
    </div>
  );
  return element;
}

export default TestApp;
