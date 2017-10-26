import React from 'react'
import renderer from 'react-test-renderer'

import ListSeparator from '../ListSeparator'

it('ListSeparator renders correctly', () => {
  const tree = renderer.create(<ListSeparator />).toJSON()
  expect(tree).toMatchSnapshot()
})
