import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'

import styles from './styles'

const UserRow = ({ user }) => (
  <View style={styles.root}>
    <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
    <View style={styles.userConatiner}>
      <Text>{user.login}</Text>
      <Text>{user.html_url}</Text>
    </View>
  </View>
)
UserRow.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired
  })
}

export default UserRow
