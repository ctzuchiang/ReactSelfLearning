import React from "react";
import UserInfo from "./UserInfo";
import Clock from "./Clock";
import { ActionLink, Toggle } from "./ActionLink";
import LoginControl from "./LoginControl";

function TestApp() {
  const element = (
    <div>
      {UserInfo}
      <Clock />
      <ActionLink />
      <Toggle />
      <LoginControl />,
    </div>
  );
  return element;
}

export default TestApp;
