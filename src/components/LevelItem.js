import React from 'react'
import PropTypes from 'prop-types'

const LevelItem = ({ isTitle, heading, text, textColor, icon, iconType }) => (
  <div className="level-item has-text-centered">
    <div>
      {heading && <p className="heading is-uppercase">
        {icon && <span className={`icon has-text-${iconType}`}>
          <i className={icon}></i>
        </span>}
        {heading}
      </p>}
      <p className={isTitle ? 'title' : 'subtitle'}>
        <span className={`has-text-${textColor}`}>{text}</span>
      </p>
    </div>
  </div>
)

LevelItem.propTypes = {
  isTitle: PropTypes.bool.isRequired,
  heading: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  textColor: PropTypes.string,
  icon: PropTypes.string,
  iconType: PropTypes.string,
}

LevelItem.defaultProps = {
  isTitle: false,
  heading: null,
  icon: null,
  iconType: 'black-bis',
  textColor: 'dark'
}

export default LevelItem
