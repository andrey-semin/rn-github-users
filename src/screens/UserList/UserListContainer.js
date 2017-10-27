import { connect } from 'react-redux'

import { fetchUsersPage } from 'store/entities/user/actions'
import { getIsLoading, getUserList } from 'store/entities/user/selectors'
import UserList from './UserList'

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  users: getUserList(state)
})

const mapDispatchToProps = {
  fetchUsersPage
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
