import logo from './logo.svg';
import './App.css';
import { Parant } from './Prop-Drilling/propDrilling';
import ContextHome from './ContextAPI/ContextHome';
import UseState from './Hooks/useState/UseState';

function App() {
  return (
    <>
      <Parant />
      <ContextHome />
      <UseState />
    </>
  );
}

export default App;
