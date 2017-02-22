import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import GiDataTable from './index'

test('component renders without errors', () => {
  const wrapper = mount(
    <GiDataTable />,
  )
  expect(wrapper.exists()).toBe(true)
})

test('basic table output with no filters applied', () => {
  const component = renderer.create(
    <GiDataTable />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('table data filtered by category "Beans"', () => {
  const component = renderer.create(
    <GiDataTable categoryFilter="Beans" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('table data filtered by gi value "Low Gi"', () => {
  const component = renderer.create(
    <GiDataTable giTypeFilter="low-gi" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('table data filtered by gi value "Low Gi" and category "Beans"', () => {
  const component = renderer.create(
    <GiDataTable categoryFilter="Beans" giTypeFilter="low-gi" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('table data filtered by text', () => {
  const component = renderer.create(
    <GiDataTable textFilter="Kidney" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
