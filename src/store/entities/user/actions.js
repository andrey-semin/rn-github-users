import { createAction } from 'redux-actions'

export const fetchUsers = createAction('FETCH__USERS')
export const fetchUsersSuccess = createAction('FETCH__USERS_SUCCESS')
export const fetchUsersFail = createAction('FETCH__USERS_FAIL')

export const fetchUsersList = () => dispath =>
  dispath(
    fetchUsers({
      request: {
        url: '/users'
      }
    })
  )
