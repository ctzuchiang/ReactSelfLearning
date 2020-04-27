import React from "react";

function SplitPaneSample() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}

function SplitPane(props) {
  return (
    <div className='SplitPane'>
      <div className='SplitPane-left'>{props.left}</div>
      <div className='SplitPane-right'>{props.right}</div>
    </div>
  );
}

function Contacts() {
  return (
    <div className='Contacts'>
      <p>This is Contacts</p>
    </div>
  );
}

function Chat() {
  return (
    <div className='Chat'>
      <p>This is Chat</p>
    </div>
  );
}

export default SplitPaneSample;
