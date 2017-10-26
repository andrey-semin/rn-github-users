import React from 'react'
import renderer from 'react-test-renderer'

import UserRow from '../UserRow'

it('UserRow renders correctly', () => {
  const tree = renderer
    .create(
      <UserRow
        user={{
          avatar_url: 'some url',
          login: 'big man',
          html_url: 'some html url'
        }}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
