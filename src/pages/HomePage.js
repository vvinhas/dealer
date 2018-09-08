import React, { Component } from "react";
import StateProvider from "../containers/StateProvider";
import toCurrency from "../helpers/toCurrency";

export default class HomePage extends Component {
  state = { capital: "", risk: 0.01 };
  capitalRef = React.createRef();

  capitalHandler = event => {
    const number = /^\d+$/;
    const key = event.key;
    // Add a number
    if (number.test(key)) {
      this.setState(prev => ({ capital: prev.capital.concat(key) }));
    }
    // Remove a number
    if (key === "Backspace" || key === "Delete") {
      this.setState(prev => ({
        capital: prev.capital.slice(0, -1)
      }));
    }
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title is-3">Position Size Calculator</h2>
          <div className="box">
            <div className="columns">
              <div className="column">
                <div className="field">
                  <label className="label">Capital</label>
                  <div className="control">
                    <input
                      ref={this.capitalRef}
                      className="input"
                      type="text"
                      placeholder="Informe seu capital"
                      value={toCurrency(this.state.capital)}
                      onKeyUp={this.capitalHandler}
                    />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label">Risco</label>
                  <div className="control">
                    <div className="select">
                      <select>
                        <option value="0.01">1%</option>
                        <option value="0.02">2%</option>
                        <option value="0.03">3%</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
