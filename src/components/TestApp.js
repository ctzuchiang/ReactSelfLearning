import React from "react";
import UserInfo from "./UserInfo";
import Clock  from "./Clock";

function TestApp() {
  const element = (
    <div>
      {UserInfo}
      <Clock />
    </div>
  );
  return element;
}

export default TestApp;
