import { connect } from 'react-redux'

import { fetchUsersList } from 'store/entities/user/actions'
import UserList from './UserList'

const mapStateToProps = null

const mapDispatchToProps = {
  fetchUsersList
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
