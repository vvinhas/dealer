import React, { Component } from 'react'
import PropTypes from 'prop-types'
import toCurrency from '../helpers/toCurrency'

export default class SettingsForm extends Component
{
  static propTypes = {
    capital: PropTypes.string.isRequired,
    capitalHandler: PropTypes.func.isRequired,
    risk: PropTypes.string.isRequired,
    riskHandler: PropTypes.func.isRequired,
  }

  state = { capital: '', risk: '0.02' }

  checkCapital = event => {
    const isNumber = /^\d+$/
    const key = event.key
    // Add a number
    if (isNumber.test(key) && this.state.capital.length <= 9) {
      this.setState(prev => {
        const capital = prev.capital.concat(key)
        this.props.capitalHandler(capital)
        return { capital }
      })
    }
    // Remove a number
    if (key === 'Backspace' || key === 'Delete') {
      this.setState(prev => {
        const capital = prev.capital.slice(0, -1)
        this.props.capitalHandler(capital)
        return { capital }
      })
    }
  }

  render() {
    const {
      capital,
      risk,
      riskHandler
    } = this.props

    return (
      <div className="box">
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">
                <span className="icon has-text-info">
                  <i className="fas fa-dollar-sign"></i>
                </span>
                <span>Capital</span>
              </label>
              <div className="control">
                <input
                  autoFocus
                  className="input"
                  type="text"
                  placeholder="Ex: R$ 10.000,00"
                  value={capital === '' ? '' : toCurrency(capital)}
                  onChange={() => null}
                  onKeyUp={this.checkCapital}
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">
                <span className="icon has-text-info">
                  <i className="fas fa-percentage"></i>
                </span>
                <span>Risco</span>
              </label>
              <div className="control">
                <div className="select">
                  <select value={risk} onChange={event => riskHandler(event.target.value)}>
                    <option value="0.01">1%</option>
                    <option value="0.02">2%</option>
                    <option value="0.03">3%</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}