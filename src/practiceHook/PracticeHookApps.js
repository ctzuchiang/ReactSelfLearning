import React from "react";
import BasicSample from "./BasicSample";

function PracticeHookApps() {
  const ViewToggle = false;

  if (ViewToggle) {
    return (
      <div className='PracticeHookApps'>
        <></>
      </div>
    );
  }

  return <BasicSample />;
}

export default PracticeHookApps;
