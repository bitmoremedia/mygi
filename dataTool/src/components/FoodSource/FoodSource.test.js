import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import testData from '../../utils/testData'

import FoodSource from './component'

test('component renders without error', () => {
  const wrapper = mount(
    <FoodSource
      match={{
        params: {
          id: 'havard',
        },
      }}
      foodList={testData.foodList}
      dataSources={testData.dataSources}
    />,
  )
  expect(wrapper.exists()).toBe(true)
})

// SNAPSHOT TESTS
test('component renders as expected', () => {
  const wrapper = mount(
    <FoodSource
      match={{
        params: {
          id: 'havard',
        },
      }}
      foodList={testData.foodList}
      dataSources={testData.dataSources}
    />,
  )
  expect(toJson(wrapper)).toMatchSnapshot()
})
