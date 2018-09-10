import React from 'react'
import Currency from '../helpers/Currency'
import SettingsContainer from '../containers/SettingsContainer'

const SettingsForm = () => (
  <SettingsContainer>
    {({ capital, risk, setCapital, setRisk }) => (
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
                  {(amount, handler) => (
                    <input
                      autoFocus
                      className="input"
                      type="text"
                      placeholder="Ex: R$ 10.000,00"
                      value={capital ? amount : ''}
                      onChange={() => null}
                      onKeyDown={event => setCapital(handler(event.key))}
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
                  <select value={risk} onChange={event => setRisk(event.target.value)}>
                    <option value="1">1%</option>
                    <option value="2">2%</option>
                    <option value="3">3%</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </SettingsContainer>
)

export default SettingsForm
