import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Animated } from 'react-native'

import { List, UserRow, Spinner, Error } from 'components'
import getNestedValueSafe from 'utils/getNestedValueSafe'
import { AnimatedHeader } from './components'
import { HEADER_MAX_HEIGHT } from './constants'
import styles from './styles'

export default class UserFollowers extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          login: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    }).isRequired,
    followers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar_url: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired
      })
    ),
    isLoading: PropTypes.bool.isRequired,
    fetchUserFollowersPage: PropTypes.func.isRequired,
    error: PropTypes.string
  }

  state = {
    scrollY: new Animated.Value(0)
  }

  componentDidMount() {
    const { navigation } = this.props
    const { state: { params } } = navigation

    this.props.fetchUserFollowersPage(params.user)
  }

  handleEndReached = () => {
    this.props.fetchUserFollowersPage(
      getNestedValueSafe(this.props, 'navigation.state.params.user')
    )
  }

  extractKey = item => `user-${item.login}-${item.id}`
  renderFollower = ({ item }) => <UserRow user={item} />

  renderFooter = () => (
    <View style={styles.footerContainer}>
      <Spinner />
    </View>
  )

  render() {
    const { navigation, followers, isLoading, error } = this.props

    if (isLoading && !followers.length && !error) {
      return <Spinner />
    }

    if (error) {
      return <Error label={error} />
    }

    const user = getNestedValueSafe(navigation, 'state.params.user')

    return (
      <View style={styles.root}>
        <List
          data={followers}
          keyExtractor={this.extractKey}
          renderItem={this.renderFollower}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
          contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
          ListFooterComponent={
            followers.length && this.props.isLoading && this.renderFooter
          }
          onEndReached={this.handleEndReached}
          onEndReachedThreshold={0.2}
        />
        <AnimatedHeader animatedValue={this.state.scrollY} user={user} />
      </View>
    )
  }
}
