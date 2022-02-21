// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import IndiRes from './pages/IndiRes';
import Result from './pages/Result';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Result/> */}
      {/* <IndiRes/> */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/search" element={<Result />}></Route>
        <Route path="/page" element={<IndiRes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
