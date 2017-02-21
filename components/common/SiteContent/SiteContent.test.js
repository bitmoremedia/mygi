import React from 'react'
import { shallow } from 'enzyme'

import SiteContent from './index'

test('renders the provided child content', () => {
  const wrapper = shallow(
    <SiteContent>
      <div className="some-class">some content</div>
    </SiteContent>,
  )
  expect(wrapper.containsMatchingElement(
    <div className="some-class">some content</div>,
  )).toEqual(true)
})

test('wraps the child content in a page class ONLY if required', () => {
  let wrapper = shallow(
    <SiteContent page>
      <div className="some-class">some content</div>
    </SiteContent>,
  )
  expect(wrapper.find('.site-content__page').exists()).toBe(true)

  wrapper = shallow(
    <SiteContent>
      <div className="some-class">some content</div>
    </SiteContent>,
  )
  expect(wrapper.find('.site-content__page').exists()).toBe(false)
})

test('wraps content in wrapper class if provided', () => {
  const wrapper = shallow(
    <SiteContent className="some-wrapper-class">
      <div className="some-class">some content</div>
    </SiteContent>,
  )
  expect(wrapper.find('.some-wrapper-class').exists()).toBe(true)
})
