import React from "react";
import { connect } from "react-redux";

const toCurrency = number =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    number
  );

const App = ({ capital, risk }) => (
  <div>
    <p>
      <strong>Capital:</strong>&nbsp;{toCurrency(capital)}
    </p>
    <p>
      <strong>Risco:</strong>&nbsp;{risk * 100}%
    </p>
  </div>
);

export default connect(state => ({
  capital: state.capital,
  risk: state.risk
}))(App);
