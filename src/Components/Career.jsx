import React from 'react';
import heroImg from './images/career-hero.svg';
import image from "./images/mission.svg"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Job from './Job';
function Career() {
  const data = [
    { role: "Delivery Manager", location: 'India', type: "Full Time" },
    { role: "NodeJS Developer", location: 'India', type: "Full Time" },
    { role: "React.JS Developers", location: 'India', type: "Full Time" },
    { role: "MERN Stack Developer", location: 'India', type: "Full Time" },
    { role: "Project Manager", location: 'India', type: "Full Time" },
    { role: "Python Developer", location: 'India', type: "Full Time" },
    { role: "UI/UX Designer", location: 'India', type: "Full Time" },
    { role: "Blockchain Developer", location: 'India', type: "Full Time" },

  ]



  return (
    <div className="bg-gray-100">
      {/* hero section starts */}
      <div className="hero py-16  bg-white">
        <div className="container flex flex-col lg:flex-row items-center justify-between text-center">
          <div className="flex-1 lg:mr-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 lg:mb-12">
              Join our team
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-3 lg:mb-12">
              We're looking for talented individuals <br />.Who want to make a difference.
            </p>
            <a href="#igoraza-career" className="btn bg-[#1d3557] hover:bg-violet-600 border-none text-lg lg:text-xl rounded-full px-6 py-3 mb-3">
              Apply Now
            </a>
          </div>
          <div className="flex-1 p-3">
            <img src={heroImg} alt="Hero" className="mx-auto lg:max-w-none" />
          </div>
        </div>
      </div>
      {/* hero section ends */}
      {/* <------ value we live starts -------> */}
      <div className="">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col justify-center items-center lg:flex-row">
          <img src={image} className="w-full lg:max-w-md mx-auto lg:ml-0 lg:order-last" alt="Values Image" />
            <div>
              <h1 className="text-3xl font-bold text-center">The values we live by</h1>
              <p className="p-2 text-gray-500 text-center">"The future doesn't belong to the fainthearted; 
              <br />It belongs to the brave."</p>

              <div className="grid gap-3 items-center justify-center">
                <div className="flex gap-2">
                  {/* box 1 */}
                  <button className="p-3 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
                    <span className="w-0 h-0 rounded bg-violet-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                    <span className="w-full text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                      Pioneer the change
                    </span>
                  </button>
                  {/* box 2 */}
                  <button className="p-3 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
                    <span className="w-0 h-0 rounded bg-violet-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                    <span className="w-full text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                      Learn & share
                    </span>
                  </button>
                </div>
                <div className="flex gap-2">
                  {/* box 3 */}
                  <button className="p-3 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
                    <span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                    <span className="w-full text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                      Collaborate & work
                    </span>
                  </button>
                  {/* box 4  */}
                  <button className="p-3 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
                    <span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                    <span className="w-full text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                      Put ideas first
                    </span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* <------ value we live ends -------> */}

      {/* box section  */}
      <div id="igoraza-career">
        <div className="p-6 text-white">
        <h1 className="text-4xl font-bold text-center md:text-left mb-8 text-black">
            IGORAZA Careers
          </h1>
          {/* heading */}
          <div className="grid ">
            <div className="p-3 flex gap-3 justify-between font-semibold bg-gray-400">
              <div>Role</div>
              <div>Location</div>
              <div>Type</div>
              <div>Detils</div>
            </div>
            {data.map((obj, index) => (
              <div key={index} className="p-3 flex gap-3 justify-between text-gray-600 text-sm border-b-2">
                <div>{obj.role.split(" ").map((word, i) => <div key={i}>{word}</div>)}</div>
                <div>{obj.location}</div>
                <div>{obj.type}</div>
                <div>
                  <button className="btn font-semibold bg-transparent text-black rounded-full hover:bg-white hover:text-[#1d3557] hover:border-[#1d3557]">Click</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* box section end */}

    </div>
  );
}

export default Career;
