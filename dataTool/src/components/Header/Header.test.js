import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import Header from './index'

test('component renders without error', () => {
  const wrapper = mount(
    <Header />,
  )
  expect(wrapper.exists()).toBe(true)
})

// SNAPSHOT TESTS

test('component renders as expected', () => {
  const wrapper = mount(
    <Header />,
  )
  expect(toJson(wrapper)).toMatchSnapshot()
})
