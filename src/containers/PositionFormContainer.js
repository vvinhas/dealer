import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { savePosition } from '../actions/positionsActions'

export default connect(
  state => ({
    capital: state.settings.capital,
    risk: state.settings.risk
  }),
  dispatch => bindActionCreators({ savePosition }, dispatch)
)(({ capital, risk, savePosition, children }) => children({ capital, risk, savePosition }))
