import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import components
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
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [showCareer, setShowCareer] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showMission, setShowMission] = useState(false);


  const handleCareerClick = () => {
    setShowCareer(true);
    setShowService(false);
    setShowMission(false);
    setNavbarOpen(!navbarOpen)
  };

  const handleHomeClick = () => {
    setShowCareer(false);
    setShowService(false);
    setShowMission(false);
    setNavbarOpen(!navbarOpen)
  };

  const handleServiceClick = () => {
    setShowCareer(false);
    setShowService(true);
    setShowMission(false);
    setNavbarOpen(!navbarOpen)
  };

  const handleMissionClick = () => {
    setShowCareer(false);
    setShowService(false);
    setShowMission(true);
    setNavbarOpen(!navbarOpen)
  }

  return (
    <Router>
      <div className="overflow-x-hidden">
        <nav className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg fixed navbar flex flex-wrap items-center justify-between px-2 py-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:justify-start">
              <div className="flex">
                <div>
                  <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                </div>
                <div>
                  <a className="font-bold text-xl text-gray-600 ">IGORAZA</a>
                </div>
              </div>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-4">
                <li className="nav-item mr-6">
                  <Link to='/' onClick={handleHomeClick} className="block pl-4 text-black rounded md:bg-transparent md:text-violet-500 md:p-0 " aria-current="page">Home</Link>
                </li>
                <li className="nav-item mr-6">
                  {/* <a href="#mission" className="block pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 md:p-0  ">Mission</a> */}
                  <Link to='/mission' onClick={handleMissionClick} className="block pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 md:p-0">Mission</Link>
                </li>
                <li className="nav-item mr-6">
                  <Link to="/service" onClick={handleServiceClick} className="block pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 md:p-0">Services</Link>
                </li>
                <li className="nav-item mr-6">
                  <Link to='/career' onClick={handleCareerClick} className="block pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 md:p-0 ">Career</Link>
                </li>
                <li className="nav-item mr-6">
                  <a href="#contact" onClick={() => setNavbarOpen(!navbarOpen)} className="block pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 md:p-0 ">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {(!showCareer && !showService && !showMission) && (
          <>
            {/* <Navbar/>? */}
            <Hero />
            <Mission />
            <Explore />
            <Features />
            <Projects />
          </>
        )}

        <Routes>
          {showCareer && (
            <Route exact path='/career' element={<Career />} ></Route>
          )}
          {showService && (
            <Route exact path='/service' element={<Service />} ></Route>
          )}
          {showMission && (
            <Route exact path='/mission' element={<Mission />} ></Route>
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
