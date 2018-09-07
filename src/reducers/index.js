const initialState = {
  capital: 0,
  risk: 0.01
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_CAPITAL":
      return {
        ...state,
        capital: action.capital
      };

    case "SET_RISK":
      return {
        ...state,
        risk: action.risk
      };

    default:
      return state;
  }
}
