import { Actions } from '../actions/settingsActions'

const initialState = {
  capital: '',
  risk: '0.02'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.setCapital:
      return {
        ...state,
        capital: action.capital
      }

    case Actions.setRisk:
      return {
        ...state,
        risk: action.risk
      }

    default:
      return state
  }
}