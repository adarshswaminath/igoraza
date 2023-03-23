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
  const [showService, setShowService] = useState(false);

  const handleCareerClick = () => {
    setShowCareer(true);
    setShowService(false);
  };

  const handleHomeClick = () => {
    setShowCareer(false);
    setShowService(false);
  };

  const handleServiceClick = () => {
    setShowCareer(false);
    setShowService(true);
  };

  return (
    <Router>
      <div className="overflow-x-hidden">
        <div className="navbar bg-base-200">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/' onClick={handleHomeClick} class="block py-2 pl-3 pr-4 text-white bg-violet-500 rounded md:bg-transparent md:text-violet-500 md:p-0" aria-current="page">Home</Link></li>
                <li><a href="#mission" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 md:p-0  ">Mission</a></li>
                <li> <Link to="/service" onClick={handleServiceClick} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 md:p-0">Services</Link></li>
                <li><Link to='/career' onClick={handleCareerClick} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 md:p-0 ">Career</Link></li>
                <li><a href="#contact" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 md:p-0 ">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl text-gray-600">Igoraza<span className='text-violet-500 font-bold text-xl'>.</span></a>
          </div>
          <div className="navbar-end">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          </div>
        </div>

        {/* <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded text-gray-500">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" class="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
              <span class="self-center text-xl font-semibold whitespace-nowrap">IGORAZA</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                <li>
                  <Link to='/' onClick={handleHomeClick} class="block py-2 pl-3 pr-4 text-white bg-violet-500 rounded md:bg-transparent md:text-violet-500 md:p-0" aria-current="page">Home</Link>
                </li>
                <li>
                  <a href="#mission" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 md:p-0  ">Mission</a>
                </li>
                <li>
                  <Link to="/service" onClick={handleServiceClick} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 md:p-0">Services</Link>
                </li>
                <li>
                  <Link to='/career' onClick={handleCareerClick} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 md:p-0 ">Career</Link>
                </li>
                <li>
                  <a href="#contact" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 md:p-0 ">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}


        {(!showCareer && !showService) && (
          <>
            <Hero />
            <Mission />
            <Explore />
            <Features />
            <Projects />
            <Footer />
          </>
        )}

        <Routes>
          {showCareer && (
            <Route exact path='/career' element={<Career />} ></Route>
          )}
          {showService && (
            <Route exact path='/service' element={<Service />} ></Route>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
