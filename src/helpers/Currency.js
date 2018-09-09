import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import toCurrency from './toCurrency'

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
    toCurrency(this.state.amount),
    this.keyUpHandler,
    this.state.amount
  )
}

export default Currency
