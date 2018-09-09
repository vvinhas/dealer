import { Actions } from '../actions/positionsActions'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.savePosition:
      return [
        ...state,
        action.payload
      ]

    default:
      return state
  }
}
