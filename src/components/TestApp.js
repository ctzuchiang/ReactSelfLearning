import React from "react";
import UserInfo from "./UserInfo";
import Clock from "./Clock";
import { NameForm, EssayForm, FlavorForm, MultiSelectForm } from "./FormSample";
// import { ActionLink, Toggle } from "./ActionLink";
// import LoginControl from "./LoginControl";
// import WarningPage from "./WarningBanner";
// import ListSample from "./ListSample";
// import Blog from "./Blog";

function TestApp() {
  const element = (
    <div>
      {UserInfo}
      <Clock />
      {/* <ActionLink />
      <Toggle />
      <LoginControl />,
      <WarningPage />
      <ListSample />
      <Blog /> */}
      <NameForm />
      <EssayForm />
      <FlavorForm />
      <MultiSelectForm />
    </div>
  );
  return element;
}

export default TestApp;
