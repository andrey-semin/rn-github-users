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
    height: 100,
    width: 100,
    borderRadius: 50
  },
  userConatiner: {
    paddingLeft: dimensions.gutter
  }
})
