import { StyleSheet } from 'react-native'
import { dimensions } from 'styles'

export default StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: dimensions.gutter
  },
  avatar: {
    height: dimensions.avatarSize,
    width: dimensions.avatarSize,
    borderRadius: dimensions.avatarSize / 2
  },
  userConatiner: {
    paddingLeft: dimensions.gutter
  }
})
