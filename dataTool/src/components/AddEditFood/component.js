import React, { Component, PropTypes } from 'react';

export class AddEditFood extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      foodName: "",
      giValue: "",
      errorMsg: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  isValid(data){
    return (data.foodName && data.giValue);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.isValid(this.state)){
      this.setState({errorMsg:"Name and GI Value are required fields"});
      return;
    }
    this.setState({errorMsg:""});
    this.props.addFoodItem({
      foodName: this.state.foodName,
      giValue: this.state.giValue,
    });
  }

  handleChange(event) {
    this.setState(
      {[event.target.name]: event.target.value},
      ()=>{
        if ( this.state.errorMsg && this.isValid(this.state) ){
          this.setState({errorMsg:""});
        }
    });
  }

  render() {
    const { foodName, giValue, errorMsg } = this.state;
    const { mode } = this.props;

    const submitButtonText = ( mode === 'add' ) ? 'Add' : 'Save';

    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='foodName' placeholder="Name" value={foodName} onChange={this.handleChange} />
        <input type='number' name='giValue' placeholder="GI Value" value={giValue} onChange={this.handleChange} />
        <input type="submit" value={submitButtonText} />
        <span>{errorMsg}</span>
      </form>
    );
  }

}

AddEditFood.defaultProps = {
  mode: 'add',
};

AddEditFood.propTypes = {
  addFoodItem: PropTypes.func.isRequired,
  mode: PropTypes.string,
};

export default AddEditFood;
