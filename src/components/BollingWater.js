import React from "react";

class BoilingCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input type='number' value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

function BoilingVerdict(props) {
  return props.celsius >= 100 ? (
    <p>The water would boil.</p>
  ) : (
    <p>The water world not boil.</p>
  );
}

export default BoilingCalculator;
