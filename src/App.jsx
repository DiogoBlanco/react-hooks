import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);

  const eventFn = () => {
    console.log('h1 clicado');
  };

  // componentDidUpdate - Executa toda vez que o componente atualiza
  useEffect(() => {
    console.log('component did update');
  });

  // componentDidMount - Executa 1x
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);
    // componentWillUnmount (limpeza)
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  // componentDidMount (com dependência) - Executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('contador mudou para', counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}
