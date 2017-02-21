import React from 'react'
import renderer from 'react-test-renderer'

import SiteContent from './index'

test('basic snapshot render', () => {
  const component = renderer.create(
    <SiteContent>
      <div className="some-class">some content</div>
    </SiteContent>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('wraps the child content as a page if specified', () => {
  const component = renderer.create(
    <SiteContent page>
      <div className="some-class">some content</div>
    </SiteContent>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('wraps content in wrapper class if provided', () => {
  const component = renderer.create(
    <SiteContent className="some-wrapper-class">
      <div className="some-class">some content</div>
    </SiteContent>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
