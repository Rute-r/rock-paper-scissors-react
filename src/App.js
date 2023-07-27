import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import { GiScissors, GiPaper, GiRock } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <Display>You:</Display>
      <Display>Computer:</Display>
      <Display>Winner:</Display>
      <section className="button-area">
        <Button>
          ROCK <GiRock size={22} />
        </Button>
        <Button>
          PAPER <GiPaper size={22} />
        </Button>
        <Button>
          SCISSORS <GiScissors size={25} />
        </Button>
      </section>
    </div>
  );
}

export default App;
