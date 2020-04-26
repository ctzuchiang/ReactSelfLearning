import React from "react";
import * as Lib from "./lib/Lib";

class ListSample extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const numbers = [1, 2, 3, 4, 5];
    return <NumberList numbers={numbers} />;
  }
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <Lib.ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}

export default ListSample;
