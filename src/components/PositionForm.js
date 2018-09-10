import React, { Component } from 'react'
import PositionFormContainer from '../containers/PositionFormContainer'
import Currency from '../helpers/Currency'

class PositionForm extends Component
{
  state = {
    asset: '',
    entry: '',
    exit: ''
  }

  saveHandler = (capital, risk, savePosition) => {
    const { asset, entry, exit } = this.state
    try {
      if (asset === '')
        throw new Error('Informe o código do ATIVO.')
      if (entry === '')
        throw new Error('Informe o valor de ENTRADA.')
      if (exit === '')
        throw new Error('Informe o valor de SAÍDA.')
      if (parseInt(entry) <= parseInt(exit))
        throw new Error('Valor de ENTRADA menor que SAÍDA.')
    } catch (error) {
      alert(error)
      return
    }
    savePosition({ capital, risk, ...this.state })
    this.setState({
      asset: '',
      entry: '',
      exit: ''
    })
  }

  render() {
    const { asset, entry, exit } = this.state
    return (
      <PositionFormContainer>
        {({ capital, risk, savePosition }) => (
          <div className="box">
            <div className="columns">
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
                      value={asset}
                      onChange={event => this.setState({ asset: event.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label">
                    <span className="icon has-text-success">
                      <i className="fas fa-caret-up"></i>
                    </span>
                    <span>Entrada</span>
                  </label>
                  <div className="control">
                    <Currency amount={entry} maxLength={5}>
                      {(amount, handler) => (
                        <input
                          type="text"
                          className="input"
                          placeholder="Ex: 8,45"
                          value={entry ? amount : ''}
                          onChange={() => {}}
                          onKeyDown={event => this.setState({ entry: handler(event.key) })}
                        />
                      )}
                    </Currency>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label">
                    <span className="icon has-text-danger">
                      <i className="fas fa-caret-down"></i>
                    </span>
                    <span>Saída</span>
                  </label>
                  <div className="control">
                  <Currency amount={exit} maxLength={5}>
                    {(amount, handler) => (
                      <input
                        type="text"
                        className="input"
                        placeholder="Ex: 6,87"
                        value={exit ? amount : ''}
                        onChange={() => {}}
                        onKeyDown={event => this.setState({ exit: handler(event.key) })}
                      />
                    )}
                  </Currency>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label is-hidden-mobile">&nbsp;</label>
                  <div className="control">
                    <button
                      className="button is-info"
                      disabled={capital ? false : true}
                      onClick={() => this.saveHandler(capital, risk, savePosition)}
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
