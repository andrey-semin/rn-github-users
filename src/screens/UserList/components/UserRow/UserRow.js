import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

const UserRow = ({ user, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.root}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      <View style={styles.userConatiner}>
        <Text>{user.login}</Text>
        <Text>{user.html_url}</Text>
      </View>
    </View>
  </TouchableOpacity>
)
UserRow.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired
  }),
  onPress: PropTypes.func.isRequired
}

export default UserRow
