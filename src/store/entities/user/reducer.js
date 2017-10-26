import { handleActions } from 'redux-actions'

import arrayToObjectByKey from 'store/utils/arrayToObjectByKey'
import {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFail,
  fetchUserFollowers,
  fetchUserFollowersSuccess
} from './actions'
import { ERROR_MESSAGE } from './constants'

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
  byId: Object.assign({}, state.byId, arrayToObjectByKey(payload.data, 'id')),
  ids: [...state.ids, ...payload.data.map(user => user.id)],
  isLoading: false
})

const handleFetchUsersFail = state => ({
  ...state,
  isLoading: false,
  error: ERROR_MESSAGE
})

const handleFetchFollowerSuccess = (
  state,
  { payload, meta: { previousAction } }
) => ({
  ...state,
  byId: Object.assign({}, state.byId, arrayToObjectByKey(payload.data, 'id'), {
    [previousAction.payload.id]: {
      ...state.byId[previousAction.payload.id],
      followers: payload.data.map(user => user.id)
    }
  }),
  ids: [...state.ids, ...payload.data.map(user => user.id)],
  isLoading: false
})

export default handleActions(
  {
    [fetchUsers]: handleFetchUsers,
    [fetchUsersSuccess]: handleFetchUsersSuccess,
    [fetchUsersFail]: handleFetchUsersFail,
    [fetchUserFollowers]: handleFetchUsers,
    [fetchUserFollowersSuccess]: handleFetchFollowerSuccess
  },
  initialState
)
