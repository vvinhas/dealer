import React from 'react'
import SettingsForm from '../components/SettingsForm'
import PositionForm from '../components/PositionForm'
import PositionList from '../components/PositionList'

const HomePage = () => (
  <section className="section">
    <div className="container">
      <h2 className="title is-3">Position Size Calculator</h2>
      <SettingsForm />
      <PositionForm />
      <PositionList />
    </div>
  </section>
)

export default HomePage
