import React from 'react'
import { shallow } from 'enzyme'

import GiDataFilter, { FilterLink } from './index'

test('component renders with at least one FilterLink', () => {
  const wrapper = shallow(
    <GiDataFilter />,
  )
  expect(wrapper.find(FilterLink).length).toBeGreaterThan(0)
})
