import stringToFloat from '../helpers/stringToFloat'

export const Actions = {
  savePosition: 'SAVE_POSITION',
}

export const savePosition = position => {
  // const { capital, risk, asset, entry, exit } = position
  const parsedPosition = Object.keys(position)
    .reduce((obj, cur) => {
      // We don't want to parse the asset name
      if (cur === 'asset') return { ...obj, [cur]: position[cur].toUpperCase() }
      return { ...obj, [cur]: stringToFloat(position[cur], 2) }
    }, {})
  const { capital, risk, entry, exit } = parsedPosition
  // Calcula o position size
  const positionSize = capital * risk/(entry - exit) * entry
  // Arredonda para o quantidade correta de ações
  const amount = Math.round((positionSize/entry)/100)*100
  // Calcula o total a ser investido
  const total = parseFloat((amount * entry).toFixed(2))
  // Calcula o percentual relativo ao capital
  const perc = parseFloat(((total/capital) * 100).toFixed(2))
  return {
    type: Actions.savePosition,
    payload: {
      ...parsedPosition,
      total,
      amount,
      perc,
      date: Date.now()
    }
  }
}