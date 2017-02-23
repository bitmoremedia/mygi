import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import testData from '../../utils/testData'

import FoodList from './component'

test('component renders without error', () => {
  const wrapper = shallow(
    <FoodList
      foodList={testData.foodList}
      dataSources={testData.dataSources}
    />,
  )
  expect(wrapper.exists()).toBe(true)
})

// SNAPSHOT TESTS

test('component renders as expected', () => {
  const wrapper = shallow(
    <FoodList
      foodList={testData.foodList}
      dataSources={testData.dataSources}
    />,
  )
  expect(toJson(wrapper)).toMatchSnapshot()
})
