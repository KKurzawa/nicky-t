import Header from './Components/Header/Header'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Components/About/About';
import Shows from './Components/Shows/Shows'
import Music from './Components/Music/Music';
import Contact from './Components/Contact/Contact';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shows" element={<Shows />} />
        <Route path="/About" element={<About />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
