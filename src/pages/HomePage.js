import React from 'react'
import SettingsForm from '../components/SettingsForm'
import PositionForm from '../components/PositionForm'
import PositionList from '../components/PositionList'
import AppIcon from '../assets/img/DealerLogo.png'

const HomePage = () => (
  <React.Fragment>
    <nav className="navbar is-light">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src={AppIcon} alt=""/>
          </div>
        </div>
      </div>
    </nav>
    <section className="section" style={{ paddingTop: '1em' }}>
      <div className="container">
        <SettingsForm />
        <PositionForm />
        <PositionList />
      </div>
    </section>
  </React.Fragment>
)

export default HomePage
