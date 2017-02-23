import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import FoodItem from './index'

const food = {
  id: 'abc-123',
  name: 'Kidney Beans',
  gi: 36,
}

test('component renders without error', () => {
  const wrapper = mount(
    <FoodItem
      food={food}
      editAction={() => {}}
    />,
  )
  expect(wrapper.exists()).toBe(true)
})

// SNAPSHOT TESTS

test('component renders as expected', () => {
  const wrapper = mount(
    <FoodItem
      food={food}
      editAction={() => {}}
    />,
  )
  expect(toJson(wrapper)).toMatchSnapshot()
})
