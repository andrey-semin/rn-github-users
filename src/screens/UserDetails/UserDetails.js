import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

export default class UserDetails extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          login: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  }

  render() {
    const { navigation } = this.props
    const { state: { params } } = navigation

    return <Text>{params.login}</Text>
  }
}
