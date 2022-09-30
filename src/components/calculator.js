import './calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleEvent = (e) => {
    const value = e.target.textContent;
    const calculat = calculate(state, value);
    setState(calculat);
  };

  const { total, operation, next } = state;
  return (
    <div className="div-container">
      <p className="text-p">Lets do some math!</p>
      <div className="calculat">
        <div className="input" data-testid="display">
          {total}
          {operation}
          {next}
        </div>
        <div className="parent">
          <button className="button" type="submit" onClick={handleEvent}>AC</button>
          <button className="button" type="submit" onClick={handleEvent}>+/-</button>
          <button className="button" type="submit" onClick={handleEvent}>%</button>
          <button className="button-color" type="submit" onClick={handleEvent} data-testid="+">+</button>
          <button className="button" type="submit" onClick={handleEvent}>7</button>
          <button className="button" type="submit" onClick={handleEvent}>8</button>
          <button className="button" type="submit" onClick={handleEvent}>9</button>
          <button className="button-color" type="submit" onClick={handleEvent}>x</button>
          <button className="button" type="submit" onClick={handleEvent}>4</button>
          <button className="button" type="submit" onClick={handleEvent}>5</button>
          <button className="button" type="submit" onClick={handleEvent}>6</button>
          <button className="button-color" type="submit" onClick={handleEvent}>-</button>
          <button className="button" type="submit" onClick={handleEvent}>1</button>
          <button className="button" type="submit" onClick={handleEvent}>2</button>
          <button className="button" type="submit" onClick={handleEvent}>3</button>
          <button className="button-color" type="submit" onClick={handleEvent}>+</button>
          <button className="button-zero" type="submit" onClick={handleEvent}>0</button>
          <button className="button" type="submit" onClick={handleEvent}>.</button>
          <button className="button-color" type="submit" onClick={handleEvent}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
