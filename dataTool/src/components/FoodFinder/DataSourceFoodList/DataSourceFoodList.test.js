import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import DataSourceFoodList from './index'

const foodList = [
  {
    id: 'abc-123',
    name: 'Kidney Bean',
    gi: 30,
    source: 'havard',
  },
  {
    id: 'def-456',
    name: 'Kidney Bean',
    gi: 44,
    source: 'mendosa',
  },
]

test('component renders without error', () => {
  const wrapper = mount(
    <DataSourceFoodList list={foodList} />,
  )
  expect(wrapper.exists()).toBe(true)
})

// SNAPSHOT TESTS

test('component renders as expected', () => {
  const wrapper = mount(
    <DataSourceFoodList list={foodList} />,
  )
  expect(toJson(wrapper)).toMatchSnapshot()
})
