import { createSelector } from 'reselect'

import getNestedValueSafe from 'utils/getNestedValueSafe'

export const getIsLoading = state => state.user.isLoading
export const getUsersById = state => state.user.byId
export const getUserList = state =>
  Object.values(state.user.byId).sort((user1, user2) => user1.id - user2.id)
export const getOpenedUserId = (state, props) =>
  getNestedValueSafe(props, 'navigation.state.params.user.id')

export const getOpenedUser = createSelector(
  [getUsersById, getOpenedUserId],
  (byId, id) => byId[id]
)

export const getOpenedUserFollowersIds = createSelector(
  [getUsersById, getOpenedUserId],
  (byId, currentId) => {
    const user = byId[currentId]
    if (user && user.followers) {
      return user.followers
    }
    return []
  }
)

export const getFollowersList = createSelector(
  [getUsersById, getOpenedUserFollowersIds],
  (byId, ids) => ids.map(id => byId[id])
)
