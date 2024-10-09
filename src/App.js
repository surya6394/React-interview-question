import logo from './logo.svg';
import './App.css';
import { Parant } from './Prop-Drilling/propDrilling';
import ContextHome from './ContextAPI/ContextHome';
import UseState from './Hooks/useState/UseState';
import UseEffectHome from './Hooks/useEffect/UseEffectHome';

function App() {
  return (
    <>
      <Parant />
      <ContextHome />
      <UseState />
      <UseEffectHome />
    </>
  );
}

export default App;
