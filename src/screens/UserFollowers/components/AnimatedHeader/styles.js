import { StyleSheet } from 'react-native'

import { colors, dimensions } from 'constants'

export default StyleSheet.create({
  animatedContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.primary,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  avatar: {
    width: dimensions.avatarSize,
    height: dimensions.avatarSize,
    zIndex: 15,
    borderRadius: dimensions.avatarSize / 2
  },
  text: {
    color: colors.white
  },
  loginText: {
    position: 'absolute',
    backgroundColor: 'transparent'
  }
})
