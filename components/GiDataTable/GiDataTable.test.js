import React from 'react'
import renderer from 'react-test-renderer'

import GiDataTable from './index'

test('renders basic component as expected', () => {
  const component = renderer.create(
    <GiDataTable />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
