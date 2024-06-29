import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Body from "./components/body/Body";
import About from "./components/others/About";
import Contact from "./components/others/Contact";
import Prebook from './components/others/Prebook';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/prebook' element={<Prebook />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
