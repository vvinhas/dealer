export const Actions = {
  setCapital: 'SET_CAPITAL',
  setRisk: 'SET_RISK'
}

export const setCapital = capital => ({
  type: Actions.setCapital,
  capital
})

export const setRisk = risk => ({
  type: Actions.setRisk,
  risk
})
