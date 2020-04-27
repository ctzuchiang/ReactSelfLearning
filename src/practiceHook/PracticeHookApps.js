import React from "react";
import BasicClickCount from "./BasicClickCount";

function PracticeHookApps() {
  const ViewToggle = false;

  if (ViewToggle) {
    return (
      <div className='PracticeHookApps'>
        <></>
      </div>
    );
  }

  return <BasicClickCount />;
}

export default PracticeHookApps;
