import React from "react";

class ListSample extends React.Component {
  constructor(props) {
    super(props);
  }

  NumberList(numbers) {
    const listItems = numbers.map((number) => (
      <li key={number}>{number}</li>
    ));
    return <ul>{listItems}</ul>;
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    return this.NumberList(numbers);
  }
}

export default ListSample;
