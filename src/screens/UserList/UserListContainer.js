import { connect } from 'react-redux'

import { fetchUsersList } from 'store/entities/user/actions'
import { getIsLoading, getUserList } from 'store/entities/user/selectors'
import UserList from './UserList'

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  users: getUserList(state)
})

const mapDispatchToProps = {
  fetchUsersList
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
