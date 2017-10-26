import { connect } from 'react-redux'

import { getUserFollowers } from 'store/entities/user/actions'
import UserDetails from './UserDetails'

const mapStateToProps = null

const mapDispatchToProps = {
  getUserFollowers
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)
