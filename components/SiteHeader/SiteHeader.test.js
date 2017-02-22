import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import SiteHeader from './index'

test('component renders without error', () => {
  const wrapper = shallow(
    <SiteHeader />,
  )
  expect(wrapper.exists()).toBe(true)
})

test('component renders as expected', () => {
  const component = renderer.create(
    <SiteHeader />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('about page active', () => {
  const component = renderer.create(
    <SiteHeader activePath="/about" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('glycemic index page active', () => {
  const component = renderer.create(
    <SiteHeader activePath="/glycemic-index/" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('glycemic index sub page active', () => {
  const component = renderer.create(
    <SiteHeader activePath="/glycemic-index/beans/" />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
