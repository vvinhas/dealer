import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Currency from '../helpers/Currency'
// import toCurrency from '../helpers/toCurrency'

export default class SettingsForm extends Component
{
  static propTypes = {
    capital: PropTypes.string.isRequired,
    capitalHandler: PropTypes.func.isRequired,
    risk: PropTypes.string.isRequired,
    riskHandler: PropTypes.func.isRequired,
  }

  render() {
    const {
      capital,
      capitalHandler,
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
                <Currency amount={capital} maxLength={9}>
                  {(amount, handler, rawAmount) => (
                    <input
                      autoFocus
                      className="input"
                      type="text"
                      placeholder="Ex: R$ 10.000,00"
                      value={rawAmount ? amount : ''}
                      onChange={() => capitalHandler(rawAmount)}
                      onKeyDown={handler}
                    />
                  )}
                </Currency>
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