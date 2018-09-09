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

  constructor(props) {
    super(props)
    this.state = { amount: props.amount }
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

  keyUpHandler = event => {
    const isNumber = /^\d+$/
    const key = event.key
    const { amount } = this.state
    const { maxLength } = this.props
    // Add a number
    if (isNumber.test(key) && amount.length <= maxLength) {
      this.setState(prev => ({ amount: prev.amount.concat(key) }))
    }
    // Remove a number
    if (key === 'Backspace' || key === 'Delete') {
      this.setState(prev => ({ amount: prev.amount.slice(0, -1) }))
    }
  }

  render = () => this.props.children(
    this.toCurrency(this.state.amount),
    this.keyUpHandler,
    this.state.amount
  )
}

export default Currency
