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
