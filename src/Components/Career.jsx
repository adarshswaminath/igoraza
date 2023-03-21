import React from 'react';
import heroImg from './images/career-hero.svg';
import image from "./images/mission.svg"
import Footer from "./Footer"

function Career() {
  return (
    <div className="bg-gray-100">
      {/* hero section starts */}
      <div className="hero py-16 p-4 lg:py-24 bg-white">
        <div className="container flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 lg:mr-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 lg:mb-12">
              Join our team
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-6 lg:mb-12">
              We're looking for talented individuals who want to make a difference.
            </p>
            <button className="btn bg-violet-500 hover:bg-violet-600 border-none text-lg lg:text-xl rounded-full px-6 py-3">
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
      <div className="text-center">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-3xl font-bold">The values we live by,</h1>
              <p className="py-3 text-gray-500">"The future doesn't belong to the fainthearted; it belongs to the brave."</p>

              <div className="grid gap-3">
                <div className="flex justify-center gap-2">
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
                <div className="flex justify-center gap-2">
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
      <div className="p-6">
        <div className="p-12  bg-violet-500 rounded-lg text-center">
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* box section end */}

      <Footer />
    </div>
  );
}

export default Career;
