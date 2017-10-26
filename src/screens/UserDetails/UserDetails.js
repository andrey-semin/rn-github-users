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
    }).isRequired,
    getUserFollowers: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { navigation } = this.props
    const { state: { params } } = navigation

    this.props.getUserFollowers(params.user.followers_url, params.user.id)
  }

  render() {
    const { navigation } = this.props
    const { state: { params } } = navigation

    return <Text>{params.user.login}</Text>
  }
}
