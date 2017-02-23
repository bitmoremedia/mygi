import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Table from './index'

const columns = [
  { key: 'first-name', label: 'First Name' },
  { key: 'last-name', label: 'Last Name' },
  { key: 'age', label: 'Age' },
]
const data = [
  [
    { key: 'abcd-1', value: 'Bill' },
    { key: 'abcd-2', value: 'Oddy' },
    { key: 'abcd-3', value: 67 },
  ],
  [
    { key: 'abcde-1', value: 'John' },
    { key: 'abcde-2', value: 'Smith' },
    { key: 'abcde-3', value: 23 },
  ],
  [
    { key: 'abcdef-1', value: 'Sarah' },
    { key: 'abcdef-2', value: 'Brown' },
    { key: 'abcdef-3', value: 34 },
  ],
]

test('component renders without error', () => {
  const wrapper = mount(
    <Table columns={columns} data={data} />,
  )
  expect(wrapper.exists()).toBe(true)
})

// SNAPSHOT TESTS

test('table renders with no data', () => {
  const component = renderer.create(
    <Table columns={columns} data={[]} />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('table renders with data', () => {
  const component = renderer.create(
    <Table columns={columns} data={data} />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
