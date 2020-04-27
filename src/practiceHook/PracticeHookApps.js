import React from "react";
import { BasicClickCount, BasicEffectClickCount } from "./BasicClickCount";

function PracticeHookApps() {
  const ViewToggle = false;

  if (ViewToggle) {
    return (
      <div className='PracticeHookApps'>
        <BasicClickCount />
      </div>
    );
  }

  return <BasicEffectClickCount />;
}

export default PracticeHookApps;
