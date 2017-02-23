import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import testData from '../../utils/testData'

import FoodFinder from './component'

test('component renders without error', () => {
  const wrapper = shallow(
    <FoodFinder
      foodList={testData.foodList}
      dataSources={testData.dataSources}
      foodId={testData.foodId}
      sourceName={testData.sourceName}
    />,
  )
  expect(wrapper.exists()).toBe(true)
})

// SNAPSHOT TESTS

test('component renders as expected', () => {
  const wrapper = shallow(
    <FoodFinder
      foodList={testData.foodList}
      dataSources={testData.dataSources}
      foodId={testData.foodId}
      sourceName={testData.sourceName}
    />,
  )
  expect(toJson(wrapper)).toMatchSnapshot()
})
