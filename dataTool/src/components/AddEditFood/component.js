import React, { Component, PropTypes } from 'react';

export class AddEditFood extends Component {
  constructor(props, context) {
    super(props, context);
    const { foodItem } = this.props;
    const state = {
      foodName: "",
      giValue: "",
      sources: {},
      errorMsg: "",
    }
    if ( foodItem ){
      state.id = foodItem.id;
      state.foodName = foodItem.name;
      state.giValue = foodItem.gi;
      state.sources = foodItem.sources;
    }
    this.state = state;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
      foodId: this.state.id,
      sources: this.state.sources,
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

  handleDelete() {
    this.props.deleteFoodItem({
      foodId: this.state.id
    });
  }

  render() {
    const { handleChange, handleSubmit, handleDelete } = this;
    const { foodName, giValue, errorMsg } = this.state;
    const { mode, foodItem } = this.props;

    const submitButtonText = ( mode === 'add' ) ? 'Add' : 'Save';
    const header = (mode === 'add') ? null : <h3>Edit: {foodItem.name}</h3>;
    const deleteButton = (mode === 'add') ? null : <button onClick={handleDelete}>Delete</button>;

    return (
      <div>
        {header}
        <form onSubmit={handleSubmit}>
          <input type='text' name='foodName' placeholder="Name" value={foodName} autoComplete="off" onChange={handleChange} />
          <input type='number' name='giValue' placeholder="GI Value" value={giValue} autoComplete="off" onChange={handleChange} />
          <input type="submit" value={submitButtonText} />
          <span>{errorMsg}</span>
        </form>
        {deleteButton}
      </div>
    );
  }

}

AddEditFood.defaultProps = {
  mode: 'add',
};

AddEditFood.propTypes = {
  addFoodItem: PropTypes.func.isRequired,
  mode: PropTypes.string,
  editFoodId: PropTypes.string,
  foodItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    gi: PropTypes.any.isRequired,
    sources: PropTypes.any.isRequired,
  }),
};

export default AddEditFood;
