import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import AddRemoveBtn from './index'
import { AddButton } from './styled-components'

test('component renders without error', () => {
  const wrapper = mount(
    <AddRemoveBtn />,
  )
  expect(wrapper.exists()).toBe(true)
})

// INTERACTIVITY TESTS

test('onclick function is fired', () => {
  const onClick = jest.fn()
  const wrapper = mount(
    <AddRemoveBtn onClick={onClick} />,
  )
  expect(onClick).not.toHaveBeenCalled()
  wrapper.find(AddButton).simulate('click')
  expect(onClick).toHaveBeenCalled()
})

// SNAPSHOT TESTS

test('render add mode', () => {
  const component = renderer.create(
    <AddRemoveBtn type="add" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('render remove mode', () => {
  const component = renderer.create(
    <AddRemoveBtn type="remove" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
