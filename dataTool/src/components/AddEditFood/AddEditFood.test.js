import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import AddEditFoodComponent from './component'
import Button from '../common/Button'

test('component renders without error', () => {
  const wrapper = mount(
    <AddEditFoodComponent addFoodItem={() => {}} deleteFoodItem={() => {}} />,
  )
  expect(wrapper.exists()).toBe(true)
})

// INTERACTIVITY TESTS

test('can add food item ONLY if valid', () => {
  const addFoodItem = jest.fn()
  const wrapper = mount(
    <AddEditFoodComponent addFoodItem={addFoodItem} deleteFoodItem={() => {}} />,
  )
  // attempt to submit without adding the required data
  wrapper.find('form').simulate('submit')
  expect(addFoodItem).not.toHaveBeenCalled()
  // add required data and attempt to submit again
  wrapper.find('input[name="foodName"]').simulate('change', { target: { name: 'foodName', value: 'Kidney Bean' } })
  wrapper.find('input[name="giValue"]').simulate('change', { target: { name: 'giValue', value: 35 } })
  wrapper.find('form').simulate('submit')
  expect(addFoodItem).toHaveBeenCalled()
})

test('can delete food item', () => {
  const deleteFoodItem = jest.fn()
  const foodItem = {
    name: 'Kidney Beans',
    id: 'some-unique-id',
    gi: 33,
    sources: {},
    category: 'Beans',
  }
  const wrapper = mount(
    <AddEditFoodComponent
      addFoodItem={() => {}}
      mode="edit"
      foodItem={foodItem}
      deleteFoodItem={deleteFoodItem}
    />,
  )
  wrapper.find(Button).last().simulate('click')
  expect(deleteFoodItem).toHaveBeenCalledWith({ foodId: 'some-unique-id' })
})

// SNAPSHOT TESTS

test('component renders as expected', () => {
  const component = renderer.create(
    <AddEditFoodComponent addFoodItem={() => {}} deleteFoodItem={() => {}} />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('component renders correctly in edit mode', () => {
  const foodItem = {
    name: 'Kidney Beans',
    id: 'some-unique-id',
    gi: 33,
    sources: {},
    category: 'Beans',
  }
  const component = renderer.create(
    <AddEditFoodComponent
      addFoodItem={() => {}}
      deleteFoodItem={() => {}}
      mode="edit"
      foodItem={foodItem}
    />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('component renders correctly in add mode with initial values provided', () => {
  const initialValues = {
    name: 'Kidney Beans',
    gi: 33,
  }
  const component = renderer.create(
    <AddEditFoodComponent
      addFoodItem={() => {}}
      deleteFoodItem={() => {}}
      mode="add"
      initialValues={initialValues}
    />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
