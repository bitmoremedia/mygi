import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

import GiDataTextFilter from './index'

test('component renders without errors', () => {
  const wrapper = mount(
    <GiDataTextFilter
      setTextFilter={() => {}}
      textFilter=""
    />,
  )
  expect(wrapper.exists()).toBe(true)
})

test('component output as expected', () => {
  const component = renderer.create(
    <GiDataTextFilter
      setTextFilter={() => {}}
      textFilter=""
    />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('setTextFilter is called when text is changed in the input form field', () => {
  const setTextFilter = jest.fn()
  const wrapper = shallow(
    <GiDataTextFilter
      setTextFilter={setTextFilter}
      textFilter=""
    />,
  )
  wrapper.find('input').simulate('change', { target: { value: 'Some Text' } })
  expect(setTextFilter).toHaveBeenCalledWith('Some Text')
})

test('setTextFilter is called when clear button is pressed, setting the new value as blank', () => {
  const setTextFilter = jest.fn()
  const wrapper = shallow(
    <GiDataTextFilter
      setTextFilter={setTextFilter}
      textFilter="Initial Text"
    />,
  )
  wrapper.find('button').simulate('click')
  expect(setTextFilter).toHaveBeenCalledWith('')
})

test('help text is displayed ONLY when the user has focus on the text input form field', () => {
  const wrapper = shallow(
    <GiDataTextFilter
      setTextFilter={() => {}}
      textFilter=""
    />,
  )
  expect(wrapper.instance().state.showHelp).toBe(false)
  wrapper.find('input').simulate('focus')
  expect(wrapper.instance().state.showHelp).toBe(true)
  wrapper.find('input').simulate('blur')
  expect(wrapper.instance().state.showHelp).toBe(false)
})

test('when the user hits return the text input loses focus and any help is hidden', () => {
  const wrapper = mount(
    <GiDataTextFilter
      setTextFilter={() => {}}
      textFilter="Initial Text"
    />,
  )
  expect(wrapper.instance().state.showHelp).toBe(false)
  wrapper.find('input').simulate('focus')
  expect(wrapper.instance().state.showHelp).toBe(true)
  wrapper.find('form').simulate('submit')
  expect(wrapper.instance().state.showHelp).toBe(false)
})
