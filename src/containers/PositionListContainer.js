import { connect } from 'react-redux'

export default connect(
  ({ positions }) => ({ positions })
)(({ positions, children }) => children({ positions }))
