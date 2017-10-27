import React from 'react'
import renderer from 'react-test-renderer'

import Error from '../Error'

it('Error renders correctly', () => {
  const tree = renderer.create(<Error label="some error text" />).toJSON()
  expect(tree).toMatchSnapshot()
})
