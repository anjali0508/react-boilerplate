import React from "react";

// Class component
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div>
        <div>{`My count is ${this.state.value}`}</div>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                value: prevState.value + 1,
              };
            });
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default Counter;
