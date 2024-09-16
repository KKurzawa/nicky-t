import Header from './Components/Header/Header'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Shows from './Pages/Shows/Shows'
import Music from './Pages/Music/Music';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shows" element={<Shows />} />
        <Route path="/About" element={<About />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
