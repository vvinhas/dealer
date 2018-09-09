import React from 'react'
import HomePageContainer from '../containers/HomePageContainer'
import SettingsForm from '../components/SettingsForm'
import PositionForm from '../components/PositionForm'

const HomePage = () => (
  <HomePageContainer>
    {({ capital, risk, setCapital, setRisk }) => (
      <section className="section">
        <div className="container">
          <h2 className="title is-3">Position Size Calculator</h2>
          <SettingsForm
            capital={capital}
            risk={risk}
            capitalHandler={setCapital}
            riskHandler={setRisk}
          />
          <PositionForm />
        </div>
      </section>
    )}
  </HomePageContainer>
)

export default HomePage
