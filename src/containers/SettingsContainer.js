import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCapital, setRisk } from '../actions/settingsActions'

export default connect(
  ({ settings: { capital, risk } }) => ({ capital, risk }),
  dispatch => bindActionCreators({ setCapital, setRisk }, dispatch)
)(({ capital, risk, setCapital, setRisk, children }) => children({ capital, risk, setCapital, setRisk }))
