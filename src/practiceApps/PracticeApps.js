import React from "react";
import ProductListApp from "./ProductListApp";
import RefNameForm from "./RefNameForm";
import SuspenseApiSample from "./SuspenseApiSample";

function PracticeApps() {
  const ViewToggle = false;

  if (ViewToggle) {
    return (
      <div className='PracticeApps'>
        <ProductListApp />
        <RefNameForm />
      </div>
    );
  }

  return <SuspenseApiSample />;
}

export default PracticeApps;
