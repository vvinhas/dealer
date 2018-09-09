export default (value, digits) => {
  const paddedValue = value.padStart(3, '0')
  const valueWithDigits = [
    paddedValue.slice(0, digits * -1),
    '.',
    paddedValue.slice(digits * -1)
  ].join('')
  return parseFloat(valueWithDigits)
}
