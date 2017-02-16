import React, { Component, PropTypes } from 'react';

import { Row, Col } from '../common/Grid';
import Button from '../common/Button';

import { Container, Input, Select, ErrorMsg, ButtonWrapper } from './styles';

export class AddEditFood extends Component {
  constructor(props, context) {
    super(props, context);
    const { foodItem } = this.props;
    const state = {
      foodName: "",
      giValue: "",
      category: "",
      sources: {},
      errorMsg: "",
    }
    if ( foodItem ){
      state.id = foodItem.id;
      state.foodName = foodItem.name;
      state.giValue = foodItem.gi;
      state.category = foodItem.category;
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
      category: this.state.category,
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
    const { foodName, category, giValue, errorMsg } = this.state;
    const { mode, foodItem, layout } = this.props;

    const submitButtonText = ( mode === 'add' ) ? 'Add' : 'Save';
    const header = (mode === 'add') ? null : <h3>Edit: {foodItem.name}</h3>;
    const deleteButton = (mode === 'add') ? null : <ButtonWrapper><Button onClick={handleDelete} danger>Delete</Button></ButtonWrapper>;
    const colWidth = ( layout === 'vertical' ) ? 12 : -1;

    return (
      <Container>
        {header}
        <form onSubmit={handleSubmit}>
          <Row>
            <Col xs={colWidth}>
              <Input type='text' name='foodName' placeholder="Name" value={foodName} autoComplete="off" onChange={handleChange} />
            </Col>
            <Col xs={colWidth}>
              <Select name='category' value={category} onChange={handleChange}>
                <option value="Beans">Beans</option>
                <option value="Breads">Breads</option>
                <option value="Cereals">Cereals</option>
                <option value="Dairy">Dairy</option>
                <option value="Fruits">Fruits</option>
                <option value="Snacks & Sweets">Snacks & Sweets</option>
                <option value="Staples">Staples</option>
                <option value="Vegetables">Vegetables</option>
              </Select>
            </Col>
            <Col xs={colWidth}>
              <Input type='number' name='giValue' placeholder="GI Value" value={giValue} autoComplete="off" onChange={handleChange} />
            </Col>
            <Col xs={colWidth}>
              <ButtonWrapper><Button type="submit">{submitButtonText}</Button></ButtonWrapper>
            </Col>
            <Col xs={colWidth}>
              <ErrorMsg>{errorMsg}</ErrorMsg>
            </Col>
          </Row>
        </form>
        {deleteButton}
      </Container>
    );
  }

}

AddEditFood.defaultProps = {
  mode: 'add',
  layout: 'vertical',
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
    category: PropTypes.oneOf(['Beans', 'Breads', 'Cereals', 'Dairy', 'Fruits', 'Snacks & Sweets', 'Staples', 'Vegetables']).isRequired,
  }),
};

export default AddEditFood;
