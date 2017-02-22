import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import SiteFooter from './index'

test('component renders without error', () => {
  const wrapper = shallow(
    <SiteFooter />,
  )
  expect(wrapper.exists()).toBe(true)
})

test('component renders as expected', () => {
  const component = renderer.create(
    <SiteFooter />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('about page active', () => {
  const component = renderer.create(
    <SiteFooter activePath="/about" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('glycemic index page active', () => {
  const component = renderer.create(
    <SiteFooter activePath="/glycemic-index" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('glycemic index sub page active', () => {
  const component = renderer.create(
    <SiteFooter activePath="/glycemic-index/beans/" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
