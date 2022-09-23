import { Component } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

    handleEvent = (e) => {
      const value = e.target.textContent;
      const calculat = calculate(this.state, value);
      this.setState(calculat);
    };

    render() {
      const { total, operation, next } = this.state;
      return (
        <div className="calculat">
          <div className="input">
            {total}
            {operation}
            {next}
          </div>
          <div className="parent">
            <button className="button" type="submit" onClick={this.handleEvent}>AC</button>
            <button className="button" type="submit" onClick={this.handleEvent}>+/-</button>
            <button className="button" type="submit" onClick={this.handleEvent}>%</button>
            <button className="button-color" type="submit" onClick={this.handleEvent}>+</button>
            <button className="button" type="submit" onClick={this.handleEvent}>7</button>
            <button className="button" type="submit" onClick={this.handleEvent}>8</button>
            <button className="button" type="submit" onClick={this.handleEvent}>9</button>
            <button className="button-color" type="submit" onClick={this.handleEvent}>x</button>
            <button className="button" type="submit" onClick={this.handleEvent}>4</button>
            <button className="button" type="submit" onClick={this.handleEvent}>5</button>
            <button className="button" type="submit" onClick={this.handleEvent}>6</button>
            <button className="button-color" type="submit" onClick={this.handleEvent}>-</button>
            <button className="button" type="submit" onClick={this.handleEvent}>1</button>
            <button className="button" type="submit" onClick={this.handleEvent}>2</button>
            <button className="button" type="submit" onClick={this.handleEvent}>3</button>
            <button className="button-color" type="submit" onClick={this.handleEvent}>+</button>
            <button className="button-zero" type="submit" onClick={this.handleEvent}>0</button>
            <button className="button" type="submit" onClick={this.handleEvent}>.</button>
            <button className="button-color" type="submit" onClick={this.handleEvent}>=</button>
          </div>
        </div>
      );
    }
}

export default Calculator;
