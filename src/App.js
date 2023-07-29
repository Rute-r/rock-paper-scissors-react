import { useState } from 'react';
import './App.css';
import { GiScissors, GiPaper, GiRock } from 'react-icons/gi';

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <section>
        <p>You:{value}</p>
        <p>Computer:</p>
        <p>Winner:</p>
      </section>
      <section>
        <button onClick={() => setValue(' ROCK')}>
          ROCK <GiRock />
        </button>
        <button onClick={() => setValue(' PAPER')}>
          PAPER <GiPaper />
        </button>
        <button onClick={() => setValue(' SCISSORS')}>
          SCISSORS
          <GiScissors />
        </button>
      </section>
    </div>
  );
}

export default App;
