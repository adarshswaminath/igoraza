import React from 'react';
import heroImg from './images/career-hero.svg';
import image from "./images/mission.svg"
import Footer from "./Footer"
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
        <div className="container flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 lg:mr-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 lg:mb-12">
              Join our team
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-3 lg:mb-12">
              We're looking for talented individuals <br/>.Who want to make a difference.
            </p>
            <button className="btn bg-violet-500 hover:bg-violet-600 border-none text-lg lg:text-xl rounded-full px-6 py-3 mb-2">
              Apply Now
            </button>
          </div>
          <div className="flex-1">
            <img src={heroImg} alt="Hero" className="mx-auto lg:max-w-none rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
      {/* hero section ends */}
      {/* <------ value we live starts -------> */}
      <div className="">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-3xl font-bold">The values we live by,</h1>
              <p className="py-3 text-gray-500">"The future doesn't belong to the fainthearted; it belongs to the brave."</p>

              <div className="grid gap-3">
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
      <div className="p-6 text-center text-white">
        {/* heading */}
        <div className="grid ">
          <div className="p-3 flex gap-3 justify-between font-semibold bg-gray-400">
            <div>Role</div>
            <div>Location</div>
            <div>Type</div>
            <div>Detils</div>
          </div>
          {data.map((obj, index) => (
          <div key={index} className="p-3 flex gap-3 justify-between text-gray-600 border-b-2">
            <div>{obj.role}</div>
            <div>{obj.location}</div>
            <div>{obj.type}</div>
            <div><button className="btn bg-violet-500 border-none rounded-full hover:bg-white hover:text-violet-500">Click</button></div>
          </div>
         ))}
        </div>
      </div>
      {/* box section end */}

      <Footer />
    </div>
  );
}

export default Career;
