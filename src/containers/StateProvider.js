import React from "react";
import { connect } from "react-redux";

export default connect(
  state => ({ state }),
  dispatch => ({ dispatch })
)(({ state, dispatch, children }) => children(state, dispatch));
