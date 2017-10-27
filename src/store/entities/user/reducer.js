import { handleActions } from 'redux-actions'

import arrayToObjectByKey from 'store/utils/arrayToObjectByKey'
import dedupeArray from 'store/utils/dedupeArray'
import {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFail,
  fetchUserFollowers,
  fetchUserFollowersSuccess,
  fetchUserFollowersFail
} from './actions'
import { ERROR_MESSAGE } from './constants'

const initialState = {
  byId: {},
  ids: [],
  isLoading: false,
  error: null,
  lastFetchedId: null
}

const handleFetchUsers = state => ({
  ...state,
  isLoading: true,
  error: null
})

const handleFetchUsersSuccess = (state, { payload }) => {
  const ids = dedupeArray([...state.ids, ...payload.data.map(user => user.id)])
  return {
    ...state,
    byId: Object.assign({}, state.byId, arrayToObjectByKey(payload.data, 'id')),
    ids,
    isLoading: false,
    lastFetchedId: ids[ids.length - 1]
  }
}

const handleFetchUsersFail = state => ({
  ...state,
  isLoading: false,
  error: ERROR_MESSAGE
})

const handleFetchFollowerSuccess = (
  state,
  { payload, meta: { previousAction } }
) => {
  const user = state.byId[previousAction.payload.id]
  return {
    ...state,
    byId: Object.assign(
      {},
      state.byId,
      arrayToObjectByKey(payload.data, 'id'),
      {
        [previousAction.payload.id]: {
          ...user,
          followers: dedupeArray([
            ...(user.followers ? user.followers : []),
            ...payload.data.map(user => user.id)
          ])
        }
      }
    ),
    ids: dedupeArray([...state.ids, ...payload.data.map(user => user.id)]),
    isLoading: false
  }
}

export default handleActions(
  {
    [fetchUsers]: handleFetchUsers,
    [fetchUsersSuccess]: handleFetchUsersSuccess,
    [fetchUsersFail]: handleFetchUsersFail,
    [fetchUserFollowers]: handleFetchUsers,
    [fetchUserFollowersSuccess]: handleFetchFollowerSuccess,
    [fetchUserFollowersFail]: handleFetchUsersFail
  },
  initialState
)
