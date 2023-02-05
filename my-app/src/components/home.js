import React from "react";
import "./home.css";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  handleIncrement() {
    console.log(this.state.value);
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  }
  handleDecrement() {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  }
  handleReset() {
    this.setState((prevState) => ({
      value: 0,
    }));
  }
  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <div className="div">
          <button className="increment" onClick={this.handleIncrement}>
            +
          </button>
          <button className="reset" onClick={this.handleReset}>
            0
          </button>
          <button className="decrement" onClick={this.handleDecrement}>
            -
          </button>
        </div>
      </div>
    );
  }
}
export default Home;
