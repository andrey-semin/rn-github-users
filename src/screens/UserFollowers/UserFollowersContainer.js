import { connect } from 'react-redux'

import { fetchUserFollowersPage } from 'store/entities/user/actions'
import {
  getFollowersList,
  getOpenedUser,
  getIsLoading,
  getError
} from 'store/entities/user/selectors'
import UserFollowers from './UserFollowers'

const mapStateToProps = (state, props) => ({
  followers: getFollowersList(state, props),
  user: getOpenedUser(state, props),
  isLoading: getIsLoading(state),
  error: getError(state)
})

const mapDispatchToProps = {
  fetchUserFollowersPage
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFollowers)
