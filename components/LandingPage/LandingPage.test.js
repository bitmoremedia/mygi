import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import LandingPage from './index'

test('component renders without errors', () => {
  const wrapper = mount(
    <LandingPage />,
  )
  expect(wrapper.exists()).toBe(true)
})

test('component output as expected', () => {
  const component = renderer.create(
    <LandingPage />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
