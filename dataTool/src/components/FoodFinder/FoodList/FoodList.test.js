import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import _values from 'lodash/values'

import testData from '../../../utils/testData'

import FoodList from './component'

const foodListArray = _values(testData.foodList)

test('component renders without error', () => {
  const wrapper = mount(
    <FoodList
      list={foodListArray}
      sourceName={testData.sourceName}
      sourceId={testData.foodId}
      associateDataSource={() => {}}
      deleteAssociatedDataSource={() => {}}
    />,
  )
  expect(wrapper.exists()).toBe(true)
})

// SNAPSHOT TESTS

test('component renders as expected', () => {
  const wrapper = mount(
    <FoodList
      list={foodListArray}
      sourceName={testData.sourceName}
      sourceId={testData.foodId}
      associateDataSource={() => {}}
      deleteAssociatedDataSource={() => {}}
    />,
  )
  expect(toJson(wrapper)).toMatchSnapshot()
})
