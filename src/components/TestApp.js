import React from "react";
import UserInfo from "./UserInfo";
import Clock from "./Clock";
import ListSample from "./ListSample";
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
      <ListSample />
    </div>
  );
  return element;
}

export default TestApp;
