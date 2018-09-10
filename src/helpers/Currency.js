import { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Currency extends PureComponent
{
  static propTypes = {
    amount: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    children: PropTypes.func.isRequired
  }

  static defaultProps = {
    maxLength: 9
  }

  toCurrency = number => {
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

  handler = key => {
    const { amount, maxLength } = this.props
    const isNumber = /^\d+$/
    // Add a number
    if (isNumber.test(key) && amount.length <= maxLength) {
      return amount.concat(key)
    }
    // Remove a number
    if (key === 'Backspace' || key === 'Delete') {
      return amount.slice(0, -1)
    }

    return amount
  }

  render = () => this.props.children(
    this.toCurrency(this.props.amount),
    this.handler
  )
}

export default Currency
