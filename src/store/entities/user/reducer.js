import { handleActions } from 'redux-actions'

import arrayToObjectByKey from 'store/utils/arrayToObjectByKey'
import { fetchUsers, fetchUsersSuccess, fetchUsersFail } from './actions'

const initialState = {
  byId: {},
  ids: [],
  isLoading: false,
  error: null
}

const handleFetchUsers = state => ({
  ...state,
  isLoading: true,
  error: null
})

const handleFetchUsersSuccess = (state, { payload }) => ({
  ...state,
  byId: arrayToObjectByKey(payload.data, 'id'),
  ids: payload.data.map(user => user.id),
  isLoading: false
})

const handleFetchUsersFail = state => ({
  ...state,
  isLoading: false,
  error: 'Smth went wrong'
})

export default handleActions(
  {
    [fetchUsers]: handleFetchUsers,
    [fetchUsersSuccess]: handleFetchUsersSuccess,
    [fetchUsersFail]: handleFetchUsersFail
  },
  initialState
)
