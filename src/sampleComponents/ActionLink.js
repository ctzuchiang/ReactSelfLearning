import React from "react";

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }
  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  //   handleClick() {
  //     this.setState(function (state) {
  //       return {
  //         isToggleOn: !state.isToggleOn,
  //       };
  //     });
  //   }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export { ActionLink, Toggle };
