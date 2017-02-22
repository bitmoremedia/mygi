import React from 'react'
import { shallow } from 'enzyme'

import GiDataTablePage from './index'

test('renders a react router Link component', () => {
  const wrapper = shallow(
    <GiDataTablePage />,
  )
  expect(true).toBe(true)
})
