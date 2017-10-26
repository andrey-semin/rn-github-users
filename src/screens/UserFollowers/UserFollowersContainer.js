import { connect } from 'react-redux'

import { getUserFollowers } from 'store/entities/user/actions'
import UserFollowers from './UserFollowers'

const mapStateToProps = null

const mapDispatchToProps = {
  getUserFollowers
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFollowers)
