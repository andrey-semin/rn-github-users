export const getIsLoading = state => state.user.isLoading
export const getUserList = state =>
  Object.values(state.user.byId).sort((user1, user2) => user1.id - user2.id)
