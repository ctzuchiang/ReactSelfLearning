import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SampleComponents from "./sampleComponents/SampleComponents";
import PracticeApps from "./practiceApps/PracticeApps";
import PracticeHookApps from "./practiceHook/PracticeHookApps"
import * as serviceWorker from "./serviceWorker";

function ComponentsToggle() {
  const ViewToggle = true;
  if (ViewToggle) {
    return (
      <div>
        <React.StrictMode>
          <App />
          <SampleComponents />
          <PracticeApps />
        </React.StrictMode>
      </div>
    );
  }
  return <PracticeHookApps />;
}

ReactDOM.render(<ComponentsToggle />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
