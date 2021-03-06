import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'

import ListSeparator from './ListSeparator'

import styles from './styles'

const List = ({ data, renderItem, ...rest }) => (
  <FlatList
    style={styles.root}
    data={data}
    renderItem={renderItem}
    ItemSeparatorComponent={ListSeparator}
    {...rest}
  />
)

List.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired
}

export default List
