import React from 'react'
import renderer from 'react-test-renderer'

import PageWrapper from './index'

test('renders as expected', () => {
  const component = renderer.create(
    <PageWrapper>
      Some content
    </PageWrapper>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
