import { handleActions } from 'redux-actions'

const initialState = {
  byId: {},
  ids: []
}

export default handleActions({}, initialState)
