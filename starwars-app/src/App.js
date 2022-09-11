import React from "react";
import { Routes, Route} from "react-router-dom";
import './assets/styles/App.css';
import Header from './components/Header';
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import NewCharacter from "./pages/NewCharacter";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewCharacter/>} />
        <Route path="about" element={<About />} />
        <Route path="features" element={<Features/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
