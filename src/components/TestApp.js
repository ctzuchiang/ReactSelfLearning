import React from "react";
import UserInfo from "./UserInfo";
import Clock from "./Clock";
import {ActionLink, Toggle} from "./ActionLink";

function TestApp() {
  const element = (
    <div>
      {UserInfo}
      <Clock />
      <ActionLink />
      <Toggle />

    </div>
  );
  return element;
}

export default TestApp;
