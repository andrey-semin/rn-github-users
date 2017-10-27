import { StackNavigator } from 'react-navigation'

import UserList from 'screens/UserList'
import UserFollowers from 'screens/UserFollowers'
import getNestedValueSafe from 'utils/getNestedValueSafe'

export default StackNavigator({
  Home: {
    screen: UserList,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Followers: {
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
