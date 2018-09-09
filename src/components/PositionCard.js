import React from 'react'
import PropTypes from 'prop-types'
import LevelItem from './LevelItem'
import toCurrency from '../helpers/toCurrency'

const PositionCard = ({ position: { asset, entry, exit, total, amount, perc } }) => (
  <article className="message is-info">
    <div className="message-body">
      <nav className="level">
        <LevelItem isTitle text={asset} textColor="link" />
        <LevelItem
          heading="Entrada"
          text={toCurrency.format(entry)}
          icon="fas fa-arrow-up"
          iconType="success"
        />
        <LevelItem
          heading="Saída"
          text={toCurrency.format(exit)}
          icon="fas fa-arrow-down"
          iconType="danger"
        />
        <LevelItem
          heading="Posição"
          text={toCurrency.format(total)}
          icon="fas fa-dollar-sign"
          iconType="link"
        />
        <LevelItem
          heading="Ações"
          text={amount}
          icon="fas fa-layer-group"
          iconType="link"
        />
        <LevelItem
          heading="Investido"
          text={`${perc}%`}
          icon="fas fa-percentage"
          iconType="grey-dark"
        />
      </nav>
    </div>
  </article>
)

PositionCard.propTypes = {
  position: PropTypes.shape({
    asset: PropTypes.string.isRequired,
    entry: PropTypes.number.isRequired,
    exit: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    perc: PropTypes.number.isRequired,
  })
}

export default PositionCard
