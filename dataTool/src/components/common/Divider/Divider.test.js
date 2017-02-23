import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Divider from './index'

test('component renders without error', () => {
  const wrapper = mount(
    <Divider />,
  )
  expect(wrapper.exists()).toBe(true)
})

// SNAPSHOT TESTS

test('component renders as expected', () => {
  const component = renderer.create(
    <Divider />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
