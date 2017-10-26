import { connect } from 'react-redux'

import { getUserFollowers } from 'store/entities/user/actions'
import { getFollowersList, getOpenedUser } from 'store/entities/user/selectors'
import UserFollowers from './UserFollowers'

const mapStateToProps = (state, props) => ({
  followers: getFollowersList(state, props),
  user: getOpenedUser(state, props)
})

const mapDispatchToProps = {
  getUserFollowers
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFollowers)
