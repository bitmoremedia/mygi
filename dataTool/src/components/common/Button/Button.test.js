import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Button from './index'

test('component renders without error', () => {
  const wrapper = mount(
    <Button>
      Button Label
    </Button>,
  )
  expect(wrapper.exists()).toBe(true)
})

// INTERACTIVITY TESTS

test('onclick function is fired', () => {
  const onClick = jest.fn()
  const wrapper = mount(
    <Button onClick={onClick}>
      Button Label
    </Button>,
  )
  expect(onClick).not.toHaveBeenCalled()
  wrapper.find('button').simulate('click')
  expect(onClick).toHaveBeenCalled()
})

// SNAPSHOT TESTS

test('component renders as expected', () => {
  const component = renderer.create(
    <Button>
      Button Label
    </Button>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('component renders a dangerous button', () => {
  const component = renderer.create(
    <Button danger>
      Button Label
    </Button>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
