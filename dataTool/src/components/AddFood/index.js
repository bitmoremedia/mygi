import React, { Component } from 'react';

export class AddFood extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      foodName: "",
      gi: "",
    };
  }

  render() {
    return (
      <div>
        <h1>Add Food</h1>
      </div>
    );
  }

}

export default AddFood;
