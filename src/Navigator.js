import { StackNavigator } from 'react-navigation'

import UserList from 'screens/UserList'
import UserFollowers from 'screens/UserFollowers'
import getNestedValueSafe from 'utils/getNestedValueSafe'
import { scenes } from 'constants'

export default StackNavigator({
  [scenes.home]: {
    screen: UserList,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  [scenes.followers]: {
    screen: UserFollowers,
    navigationOptions: ({ navigation }) => {
      const login = getNestedValueSafe(navigation, 'state.params.user.login')
      const headerTitle = login ? `${login}'s followers` : 'Followers'
      return {
        headerTitle
      }
    }
  }
})
