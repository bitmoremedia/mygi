import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Modal from './index'

test('component renders without error', () => {
  const wrapper = mount(
    <Modal visible onClose={() => {}}>
      Modal Content
    </Modal>,
  )
  expect(wrapper.exists()).toBe(true)
})

// INTERACTIVITY TESTS

test('onClose function is fired when modal is closed', () => {
  const onClose = jest.fn()
  const wrapper = mount(
    <Modal visible onClose={onClose}>
      Modal Content
    </Modal>,
  )
  expect(onClose).not.toHaveBeenCalled()
  wrapper.find('.rodal-close').simulate('click')
  expect(onClose).toHaveBeenCalled()
})

// SNAPSHOT TESTS

test('component renders as expected', () => {
  const component = renderer.create(
    <Modal visible onClose={() => {}}>
      Modal Content
    </Modal>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('modal hidden', () => {
  const component = renderer.create(
    <Modal visible={false} onClose={() => {}}>
      Modal Content
    </Modal>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
