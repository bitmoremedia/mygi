import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import ToolTip from './index'

test('component renders without error', () => {
  const wrapper = mount(
    <ToolTip text="tool-tip-text">
      Content
    </ToolTip>,
  )
  expect(wrapper.exists()).toBe(true)
})

// INTERACTIVITY TESTS

// SNAPSHOT TESTS

test('component renders as expected', () => {
  const component = renderer.create(
    <ToolTip text="tool-tip-text">
      Content
    </ToolTip>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
