import React from 'react'
import { shallow } from 'enzyme'

import GiDataTablePage from './index'

test('page renders without error', () => {
  const wrapper = shallow(
    <GiDataTablePage />,
  )
  expect(wrapper.exists()).toBe(true)
})

test('setTextFilter function updates the textFilter state', () => {
  const wrapper = shallow(
    <GiDataTablePage />,
  )
  expect(wrapper.instance().state.textFilter).toEqual('')
  wrapper.instance().setTextFilter('Kidney')
  expect(wrapper.instance().state.textFilter).toEqual('Kidney')
})
