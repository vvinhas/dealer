// export default new Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL',
//   minimumFractionDigits: 2
// })

export default number => {
  // Pad the number
  const paddedNumber = number
    .toString()
    .padStart(11, '0')
  // Add cents digits
  const amount = [
    paddedNumber.slice(0, -2),
    '.',
    paddedNumber.slice(-2)
  ].join('')
  // Format to currency
  const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })
  return currency.format(amount)
}

/**
 * 00000000000
 * /^[0-9]{1$/
 */
