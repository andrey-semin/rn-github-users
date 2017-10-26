import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'

import List from '../List'

it('List renders correctly', () => {
  const tree = renderer
    .create(
      <List
        data={[{ id: 1 }, { id: 2 }]}
        renderItem={({ item }) => <Text>{item.id}</Text>}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
