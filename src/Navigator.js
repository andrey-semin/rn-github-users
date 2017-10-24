import { StackNavigator } from 'react-navigation'

import UserList from 'screens/UserList'
import UserDetails from 'screens/UserDetails'

export default StackNavigator({
  Home: {
    screen: UserList,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Details: {
    screen: UserDetails,
    navigationOptions: {
      headerTitle: 'Details'
    }
  }
})
