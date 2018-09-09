import React, { Component } from 'react'
import SettingsForm from '../components/SettingsForm'
import PositionForm from '../components/PositionForm'

export default class HomePage extends Component 
{
  // State
  state = { capital: '', risk: '0.02' }
  // Handlers
  capitalHandler = capital => this.setState({ capital })
  riskHandler = risk => this.setState({ risk })
  // Render
  render() {
    const { capital, risk } = this.state

    return (
      <section className="section">
        <div className="container">
          <h2 className="title is-3">Position Size Calculator</h2>
          <SettingsForm
            capital={capital}
            risk={risk}
            capitalHandler={this.capitalHandler}
            riskHandler={this.riskHandler}
          />
          <PositionForm />
        </div>
      </section>
    )
  }
}
