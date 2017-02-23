import React, { Component, PropTypes } from 'react'

import { Row, Col } from '../common/Grid'
import Button from '../common/Button'

import { Container, Input, Select, ErrorMsg, ButtonWrapper } from './styled-components'

const isValid = data => (data.foodName && data.giValue)

export class AddEditFood extends Component {
  constructor(props, context) {
    super(props, context)
    const { foodItem, initialValues } = this.props
    const initialState = {
      foodName: initialValues.name || '',
      giValue: initialValues.gi || '',
      category: initialValues.category || '',
      sources: initialValues.sources || {},
      errorMsg: '',
    }
    if (foodItem) {
      initialState.id = foodItem.id
      initialState.foodName = foodItem.name
      initialState.giValue = foodItem.gi
      initialState.category = foodItem.category
      initialState.sources = foodItem.sources
    }
    this.state = initialState
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (!isValid(this.state)) {
      this.setState({ errorMsg: 'Name and GI Value are required fields' })
      return
    }
    this.setState({ errorMsg: '' })
    this.props.addFoodItem({
      foodName: this.state.foodName,
      giValue: this.state.giValue,
      category: this.state.category,
      foodId: this.state.id,
      sources: this.state.sources,
    })
  }

  handleChange = (event) => {
    this.setState(
      { [event.target.name]: event.target.value },
      () => {
        if (this.state.errorMsg && isValid(this.state)) {
          this.setState({ errorMsg: '' })
        }
      })
  }

  handleDelete = () => {
    this.props.deleteFoodItem({
      foodId: this.state.id,
    })
  }

  render() {
    const { handleChange, handleSubmit, handleDelete } = this
    const { foodName, category, giValue, errorMsg } = this.state
    const { mode, foodItem, layout } = this.props

    const submitButtonText = (mode === 'add') ? 'Add' : 'Save'
    const header = (mode === 'add') ? null : <h3>Edit: {foodItem.name}</h3>
    const deleteButton = (mode === 'add') ? null : <ButtonWrapper><Button onClick={handleDelete} danger>Delete</Button></ButtonWrapper>
    const colWidth = (layout === 'vertical') ? 12 : -1

    return (
      <Container>
        {header}
        <form onSubmit={handleSubmit}>
          <Row>
            <Col xs={colWidth}>
              <Input type="text" name="foodName" placeholder="Name" value={foodName} autoComplete="off" onChange={handleChange} />
            </Col>
            <Col xs={colWidth}>
              <Select name="category" value={category} onChange={handleChange}>
                <option value="" disabled defaultValue>Select Category</option>
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
              <Input type="number" name="giValue" placeholder="GI Value" value={giValue} autoComplete="off" onChange={handleChange} />
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
    )
  }

}

AddEditFood.defaultProps = {
  mode: 'add',
  layout: 'vertical',
  initialValues: {
    sources: {},
  },
  foodItem: undefined,
}

AddEditFood.propTypes = {
  addFoodItem: PropTypes.func.isRequired,
  deleteFoodItem: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['add', 'edit']),
  layout: PropTypes.oneOf(['vertical', 'inline']),
  foodItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    gi: PropTypes.any.isRequired,
    sources: PropTypes.any.isRequired,
    category: PropTypes.oneOf(['', 'Beans', 'Breads', 'Cereals', 'Dairy', 'Fruits', 'Snacks & Sweets', 'Staples', 'Vegetables']),
  }),
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    gi: PropTypes.any,
    sources: PropTypes.any,
    category: PropTypes.oneOf(['', 'Beans', 'Breads', 'Cereals', 'Dairy', 'Fruits', 'Snacks & Sweets', 'Staples', 'Vegetables']),
  }),
}

export default AddEditFood
