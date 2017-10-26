import { StackNavigator } from 'react-navigation'

import UserList from 'screens/UserList'
import UserFollowers from 'screens/UserFollowers'

export default StackNavigator({
  Home: {
    screen: UserList,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Followers: {
    screen: UserFollowers,
    navigationOptions: {
      headerTitle: 'Followers'
    }
  }
})
