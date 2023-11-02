import P from 'prop-types';
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
};
export default App;
