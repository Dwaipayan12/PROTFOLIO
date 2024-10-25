import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componenets/Home';
import About from './componenets/About';
import Publications from './componenets/Publications';
import Contact from './componenets/Contact';
import Project from './componenets/Project';
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Project" element={<Project />} />
      <Route path="/Publications" element={<Publications />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}

export default App;
