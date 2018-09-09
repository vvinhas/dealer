import React, { Component } from 'react'
import PositionFormContainer from '../containers/PositionFormContainer'
import Currency from '../helpers/Currency'

class PositionForm extends Component
{
  state = {
    asset: 'petr4',
    entry: '845',
    exit: '687'
  }

  render() {
    return (
      <PositionFormContainer>
        {({ capital, risk, savePosition }) => (
          <div className="box">
            <div className="columns">
              {/* Ativo */}
              <div className="column">
                <div className="field">
                  <label className="label">
                    <span className="icon has-text-info">
                      <i className="fas fa-chart-line"></i>
                    </span>
                    <span>Ativo</span>
                  </label>
                  <div className="control">
                    <input
                      type="text"
                      className="input is-uppercase"
                      placeholder="Ex: PETR4"
                      value={this.state.asset}
                      onChange={event => this.setState({ asset: event.target.value })}
                    />
                  </div>
                </div>
              </div>
              {/* Entrada */}
              <div className="column">
                <div className="field">
                  <label className="label">
                    <span className="icon has-text-success">
                      <i className="fas fa-caret-up"></i>
                    </span>
                    <span>Entrada</span>
                  </label>
                  <div className="control">
                    <Currency amount={this.state.entry} maxLength={5}>
                      {(amount, handler, rawAmount) => (
                        <input
                          type="text"
                          className="input"
                          placeholder="Ex: 8,45"
                          value={rawAmount ? amount : ''}
                          onChange={() => this.setState({ entry: rawAmount })}
                          onKeyDown={handler}
                        />
                      )}
                    </Currency>
                  </div>
                </div>
              </div>
              {/* Saída */}
              <div className="column">
                <div className="field">
                  <label className="label">
                    <span className="icon has-text-danger">
                      <i className="fas fa-caret-down"></i>
                    </span>
                    <span>Saída</span>
                  </label>
                  <div className="control">
                  <Currency amount={this.state.exit} maxLength={5}>
                    {(amount, handler, rawAmount) => (
                      <input
                        type="text"
                        className="input"
                        placeholder="Ex: 6,87"
                        value={rawAmount ? amount : ''}
                        onChange={() => this.setState({ exit: rawAmount })}
                        onKeyDown={handler}
                      />
                    )}
                  </Currency>
                  </div>
                </div>
              </div>
              {/* Button */}
              <div className="column">
                <div className="field">
                  <label className="label is-hidden-mobile">&nbsp;</label>
                  <div className="control">
                    <button
                      className="button is-info"
                      onClick={() => savePosition({ capital, risk, ...this.state })}
                    >
                      <span className="icon">
                        <i className="fas fa-save"></i>
                      </span>
                      <span>Salvar</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </PositionFormContainer>
    )
  }
}

export default PositionForm
