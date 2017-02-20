import React from 'react'
import { shallow } from 'enzyme'
import PageLink from './index'

import { Link } from 'react-router'

test('renders a react router Link component', ()=>{
  const wrapper = shallow(
    <PageLink
      to="somewhere"
    >
      A page link
    </PageLink>
  )
  expect(wrapper.find(Link)).toHaveLength(1)
})

test('the router Link component has a trailing slash added if ommited', ()=>{
  const wrapper = shallow(
    <PageLink
      to="somewhere"
    >
      A page link
    </PageLink>
  )
  const RouterLink = wrapper.find(Link);
  expect(RouterLink.props().to).toEqual('somewhere/')
})

test('the router Link component includes the trailing slash if one is provided', ()=>{
  const wrapper = shallow(
    <PageLink
      to="somewhere-else/"
    >
      A page link
    </PageLink>
  )
  const RouterLink = wrapper.find(Link);
  expect(RouterLink.props().to).toEqual('somewhere-else/')
})

test('the router Link component is passed any provided className', ()=>{
  const wrapper = shallow(
    <PageLink
      to="somewhere-else/"
      className="some-class"
    >
      A page link
    </PageLink>
  )
  const RouterLink = wrapper.find(Link);
  expect(RouterLink.props().className).toEqual('some-class')
})

test('the router Link component is passed any provided children', ()=>{
  const wrapper = shallow(
    <PageLink
      to="somewhere-else/"
      className="some-class"
    >
      A page link
    </PageLink>
  )
  const RouterLink = wrapper.find(Link);
  expect(RouterLink.props().children).toEqual('A page link')
})
