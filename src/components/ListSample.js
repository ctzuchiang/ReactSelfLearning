import React from "react";

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
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}

function ListItem(props) {
  const value = props.value;
  return <li>{value}</li>;
}

export default ListSample;
