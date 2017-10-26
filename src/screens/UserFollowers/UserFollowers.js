import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text, View, Animated, Image } from 'react-native'

import { List, UserRow } from 'components'
import {
  HEADER_MAX_HEIGHT,
  HEADER_MIN_HEIGHT,
  HEADER_SCROLL_DISTANCE,
  MIN_LOGIN_FONT_SIZE,
  MAX_LOGIN_FONT_SIZE
} from './constants'
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

  state = {
    scrollY: new Animated.Value(0)
  }

  componentDidMount() {
    const { navigation } = this.props
    const { state: { params } } = navigation

    this.props.getUserFollowers(params.user.login, params.user.id)
  }

  renderFollower = ({ item }) => (
    <UserRow user={item} key={`user-${item.login}-${item.id}`} />
  )

  interpolateContainerHeight = () =>
    this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })

  interpolateInfoOpacity = () =>
    this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp'
    })

  interpolateInfoTranslate = () =>
    this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })

  interpolateLoginTextTop = () =>
    this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [
        HEADER_MAX_HEIGHT - 40,
        (HEADER_MIN_HEIGHT - MIN_LOGIN_FONT_SIZE) / 2
      ],
      extrapolate: 'clamp'
    })

  interpolateLoginTextFontSize = () =>
    this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [MAX_LOGIN_FONT_SIZE, MIN_LOGIN_FONT_SIZE],
      extrapolate: 'clamp'
    })

  render() {
    const { navigation, followers } = this.props
    const { state: { params } } = navigation

    const containerHeight = this.interpolateContainerHeight()
    const infoOpaticy = this.interpolateInfoOpacity()
    const infoTranslate = this.interpolateInfoTranslate()
    const loginTextTop = this.interpolateLoginTextTop()
    const loginFontSize = this.interpolateLoginTextFontSize()

    return (
      <View style={styles.root}>
        <List
          data={followers}
          renderItem={this.renderFollower}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
          contentContainerStyle={{ marginTop: HEADER_MAX_HEIGHT }}
        />
        <Animated.View
          style={[
            styles.animatedContainer,
            {
              height: containerHeight
            }
          ]}
        >
          <Animated.View
            style={[
              styles.infoContainer,
              {
                opacity: infoOpaticy,
                transform: [{ translateY: infoTranslate }]
              }
            ]}
          >
            <Image
              source={{ uri: params.user.avatar_url }}
              style={styles.avatar}
            />
            <Text style={styles.text}>{params.user.html_url}</Text>
          </Animated.View>
          <Animated.Text
            style={[
              styles.text,
              styles.loginText,
              {
                top: loginTextTop,
                fontSize: loginFontSize
              }
            ]}
          >
            {params.user.login}
          </Animated.Text>
        </Animated.View>
      </View>
    )
  }
}
