import React from "react";
import UserInfo from "./UserInfo";
import Clock from "./Clock";
import Blog from "./Blog";

function TestApp() {
  const element = (
    <div>
      {UserInfo}
      <Clock />
      {/* <ActionLink />
      <Toggle />
      <LoginControl />,
      <WarningPage />
      <ListSample /> */}
      <Blog />
    </div>
  );
  return element;
}

export default TestApp;
