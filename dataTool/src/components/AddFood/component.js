import React, { Component, PropTypes } from 'react';

export class AddFood extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      foodName: "",
      giValue: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    debugger;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addFoodItem({
      foodName: this.state.foodName,
      giValue: this.state.giValue,
    });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type='text' name='foodName' value={this.state.foodName} onChange={this.handleChange} />
        </label>
        <label>
          GI:
          <input type='number' name='giValue' value={this.state.giValue} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }

}

AddFood.propTypes = {
  addFoodItem: PropTypes.func.isRequired,
};

export default AddFood;
