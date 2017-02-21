import React from 'react'
import renderer from 'react-test-renderer'

import GiDataFilter from './index'

test('default filters display with the two "All" buttons as active', () => {
  const component = renderer.create(
    <GiDataFilter />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('category "Beans" filter shows relevant button as active', () => {
  const component = renderer.create(
    <GiDataFilter categoryFilter="Beans" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('gi type "Low GI" filter shows relevant button as active', () => {
  const component = renderer.create(
    <GiDataFilter giTypeFilter="low-gi" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('combined filters "Beans" and "Low GI" show the relevant buttons as active', () => {
  const component = renderer.create(
    <GiDataFilter categoryFilter="Beans" giTypeFilter="low-gi" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
