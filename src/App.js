import logo from './logo.svg';
import './App.css';
import { Parant } from './Prop-Drilling/propDrilling';
import ContextHome from './ContextAPI/ContextHome';
import UseState from './Hooks/useState/UseState';
import UseEffectHome from './Hooks/useEffect/UseEffectHome';
import UseRefHome from './Hooks/useRef/UseRefHome';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Parant />
      <ContextHome />
      <UseState />
      <UseEffectHome />
      <UseRefHome /> */}
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Sidebar />
                <Routes>
                  <Route path="/home" element={<></>} />
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
