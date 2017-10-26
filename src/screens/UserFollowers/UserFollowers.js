import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

import { List, UserRow } from 'components'

export default class UserFollowers extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          login: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    }).isRequired,
    getUserFollowers: PropTypes.func.isRequired,
    followers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar_url: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired
      })
    )
  }

  componentDidMount() {
    const { navigation } = this.props
    const { state: { params } } = navigation

    this.props.getUserFollowers(params.user.login, params.user.id)
  }

  renderFollower = ({ item }) => (
    <UserRow user={item} key={`user-${item.login}-${item.id}`} />
  )

  render() {
    const { navigation, followers } = this.props
    const { state: { params } } = navigation

    return (
      <View>
        <Text>{params.user.login}</Text>
        <List data={followers} renderItem={this.renderFollower} />
      </View>
    )
  }
}
