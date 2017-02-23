import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import FoodFinder from './component'

import testData from '../../utils/testData'

//console.log('**** testData *******')
//console.log(testData)

xtest('component renders without error', () => {
  const wrapper = shallow(
    <FoodFinder
      foodList={testData.foodList}
      dataSources={testData.dataSources}
      foodId={testData.foodId}
      sourceName={testData.sourceName}
    />,
  )
  console.log(wrapper.debug())
  expect(wrapper.exists()).toBe(true)
})

// INTERACTIVITY TESTS

// SNAPSHOT TESTS

xtest('component renders as expected', () => {
  const component = renderer.create(
    <FoodFinder
      foodList={testData.foodList}
      dataSources={testData.dataSources}
      foodId={testData.foodId}
      sourceName={testData.sourceName}
    />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
