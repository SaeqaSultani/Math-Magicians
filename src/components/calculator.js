/* eslint-disable */
import { Component } from 'react';
import './calculator.css';

class Calculator extends Component {
  render() {
    return (
      <div className="calculat">
        <div>
          <input class="input" type="text" name="name" id="name" placeholder = "0"/>
        </div>
        <div className="parent">
          <button className="button" type="submit" value="number" onClick={() => { }}>AC</button>
          <button className="button" type="submit" value="number" onClick={() => { }}>+/-</button>
          <button className="button" type="submit" value="number" onClick={() => { }}>%</button>
          <button className="button-color" type="submit" value="number" onClick={() => { }}>+</button>
          <button className="button" type="submit" value="number" onClick={() => { }}>7</button>
          <button className="button" type="submit" value="number" onClick={() => { }}>8</button>
          <button className="button" type="submit" value="number" onClick={() => { }}>9</button>
          <button className="button-color" type="submit" value="number" onClick={() => { }}>X</button>
          <button className="button" type="submit" value="number" onClick={() => { }}>4</button>
          <button className="button" type="submit" value="number" onClick={() => { }}>5</button>
          <button className="button" type="submit" value="number" onClick={() => { }}>6</button>
          <button className="button-color" type="submit" value="number" onClick={() => { }}>-</button>
          <button className="button" type="submit" value="number" onClick={() => { }}>1</button>
          <button className="button" type="submit" value="number" onClick={() => { }}>2</button>
          <button className="button" type="submit" value="number" onClick={() => { }}>3</button>
          <button className="button-color" type="submit" value="number" onClick={() => { }}>+</button>
          <button className="button-zero" type="submit" value="number" onClick={() => { }}>0</button>
          <button className="button" type="submit" value="number" onClick={() => { }}>.</button>
          <button className="button-color" type="submit" value="number" onClick={() => { }}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
