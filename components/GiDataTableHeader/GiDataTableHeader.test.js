import React from 'react'
import renderer from 'react-test-renderer'

import GiDataTableHeader from './index'

test('basic header with no props', () => {
  const component = renderer.create(
    <GiDataTableHeader />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('header with categoryFilter prop only', () => {
  const component = renderer.create(
    <GiDataTableHeader categoryFilter="Beans" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('header with giTypeFilter prop only', () => {
  const component = renderer.create(
    <GiDataTableHeader giTypeFilter="low-gi" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('header with categoryFilter and giTypeFilter props', () => {
  const component = renderer.create(
    <GiDataTableHeader giTypeFilter="low-gi" categoryFilter="Beans" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
