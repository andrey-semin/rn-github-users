import { StyleSheet } from 'react-native'

import { colors } from 'styles'

export default StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    flex: 1
  },
  animatedContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
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
    width: 100,
    height: 100,
    zIndex: 15,
    borderRadius: 50
  },
  text: {
    color: colors.white
  },
  loginText: {
    position: 'absolute',
    backgroundColor: 'transparent'
  }
})
