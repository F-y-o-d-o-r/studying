import React, { Component, Fragment } from 'react';

export class Test extends Component {
  state = {
    number: 0
  };
  clickHandler = (event, prevState) => {
    this.setState({
      number: this.state.number + 1
    });
    console.log(event);
  };
  render() {
    return (
      <Fragment>
        <p>
          {this.state.number}
          <button onClick={this.clickHandler}> +</button>
        </p>
      </Fragment>
    );
  }
}
