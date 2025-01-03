import logo from './logo.svg';
import './App.css';
import { Parant } from './Prop-Drilling/propDrilling';
import ContextHome from './ContextAPI/ContextHome';
import UseState from './Hooks/useState/UseState';
import UseEffectHome from './Hooks/useEffect/UseEffectHome';
import Counter from './Hooks/useReducer/Counter';
import ReactMemo from './Memo/ReactMemo';
import UseMemoHome from './Hooks/useMemo/UseMemoHome';
import UseCallback from './Hooks/useCallback/UseCallback';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Components/Pages/Home';
import HOC from './Higher-Order-Component/HOC';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
  ])

  return (
    <>
      <Parant />
      <ContextHome />
      <UseState />
      <UseEffectHome />
      <Counter />
      <ReactMemo />
      <UseMemoHome />
      <UseCallback />
      <HOC />
    </>
  );
}

export default App;
