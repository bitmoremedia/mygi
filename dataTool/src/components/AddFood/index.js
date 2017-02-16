import React, { Component } from 'react';

export class AddFood extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: "",
      gi: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit form', this.state);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          GI:
          <input type='number' name='gi' value={this.state.gi} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }

}

export default AddFood;
