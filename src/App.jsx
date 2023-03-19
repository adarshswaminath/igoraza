import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import components
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Explore from './Components/Explore';
import Journey from './Components/Journey';
import Mission from './Components/Mission';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Career from './Components/Career';
import Service from './Components/Service';

function App() {
  const [showCareer, setShowCareer] = useState(false);

  const handleCareerClick = () => {
    setShowCareer(true);
  };

  const handleHomeClick = () => {
    setShowCareer(false);
  };
  return (


    <Router>
      <div className="">
        <div className="navbar bg-base-100">
          <div className="flex-1">
          <Link to='/' className="btn btn-ghost normal-case text-xl" onClick={handleHomeClick}>Logo.</Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
              <Link to='/' onClick={handleHomeClick}>Home</Link>
              </li>
              <li tabIndex={0}>
                <a>
                  Drop
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </a>
                <ul className="p-2 bg-base-100">
                  <li><a href='#mission'>Mission</a></li>
                  <li><a href="#service">Service</a></li>
                </ul>
              </li>
              <li>
              <Link to='/career' onClick={handleCareerClick}>Career</Link>
              </li>
            </ul>
          </div>
        </div>

        {!showCareer && (
          <>
            <Hero />
            <Journey />
            <Explore />
            <Mission />
            <Features />
            <Service />
            <Projects />
            <Footer />
          </>
        )}

        <Routes>
          {showCareer && (
            <Route exact path='/career' element={<Career />} ></Route>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
