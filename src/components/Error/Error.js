import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import styles from './styles'

const Error = ({ label }) => (
  <View style={styles.root}>
    <Text>{label}</Text>
  </View>
)

Error.propTypes = {
  label: PropTypes.string.isRequired
}

export default Error
