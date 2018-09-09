import React from 'react'
import SettingsForm from '../components/SettingsForm'
import PositionForm from '../components/PositionForm'

const HomePage = () => (
  <section className="section">
    <div className="container">
      <h2 className="title is-3">Position Size Calculator</h2>
      <SettingsForm />
      <PositionForm />
    </div>
  </section>
)

export default HomePage
