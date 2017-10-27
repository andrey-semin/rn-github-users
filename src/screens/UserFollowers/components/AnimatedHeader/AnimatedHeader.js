import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text, Animated, Image } from 'react-native'

import {
  HEADER_MAX_HEIGHT,
  HEADER_MIN_HEIGHT,
  HEADER_SCROLL_DISTANCE,
  MIN_LOGIN_FONT_SIZE,
  MAX_LOGIN_FONT_SIZE
} from '../../constants'
import styles from './styles'

export default class AnimatedHeader extends PureComponent {
  static propTypes = {
    animatedValue: PropTypes.object.isRequired,
    user: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired
    })
  }

  interpolateContainerHeight = value =>
    value.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })

  interpolateInfoOpacity = value =>
    value.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp'
    })

  interpolateInfoTranslate = value =>
    value.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })

  interpolateLoginTextTop = value =>
    value.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [
        HEADER_MAX_HEIGHT - 40,
        (HEADER_MIN_HEIGHT - MIN_LOGIN_FONT_SIZE) / 2
      ],
      extrapolate: 'clamp'
    })

  interpolateLoginTextFontSize = value =>
    value.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [MAX_LOGIN_FONT_SIZE, MIN_LOGIN_FONT_SIZE],
      extrapolate: 'clamp'
    })

  render() {
    const { user, animatedValue } = this.props
    const containerHeight = this.interpolateContainerHeight(animatedValue)
    const infoOpaticy = this.interpolateInfoOpacity(animatedValue)
    const infoTranslate = this.interpolateInfoTranslate(animatedValue)
    const loginTextTop = this.interpolateLoginTextTop(animatedValue)
    const loginFontSize = this.interpolateLoginTextFontSize(animatedValue)

    return (
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
          <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
          <Text style={styles.text}>{user.html_url}</Text>
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
          {user.login}
        </Animated.Text>
      </Animated.View>
    )
  }
}
