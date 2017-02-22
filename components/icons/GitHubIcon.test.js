import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import GitHubIcon from './GitHubIcon'

test('component renders without error', () => {
  const wrapper = mount(
    <GitHubIcon />,
  )
  expect(wrapper.exists()).toBe(true)
})

test('component renders as expected', () => {
  const component = renderer.create(
    <GitHubIcon />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
