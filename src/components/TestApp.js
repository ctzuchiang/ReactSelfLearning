import React from "react";
import UserInfo from "./UserInfo";
import Clock from "./Clock";
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
      <FormSample />
    </div>
  );
  return element;
}

function FormSample() {
  return (
    <form>
      <label>
        Name:
        <input type='text' name='name' />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}

export default TestApp;
