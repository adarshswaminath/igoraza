import React from 'react';
import heroImg from './images/career-hero.svg';
import Footer from "./Footer"

function Career() {
  return (
    <div className="bg-gray-100">
      {/* hero section starts */}
      <div className="hero py-16 lg:py-24 bg-white">
        <div className="container flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 lg:mr-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 lg:mb-12">
              Join our team
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-6 lg:mb-12">
              We're looking for talented individuals who want to make a difference.
            </p>
            <button className="btn bg-violet-500 border-none text-lg lg:text-xl">Apply Now</button>
          </div>
          <div className="flex-1">
            <img src={heroImg} alt="Hero" className="mx-auto lg:max-w-none" />
          </div>
        </div>
      </div>
      {/* hero section ends */}
      <h2 className="text-4xl text-gray-500 font-bold text-center p-2">Blogs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-3">
        <div className="card text-gray-600 bg-white rounded-lg shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">Blog Post 1</h2>
            <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="card-actions flex justify-end">
              <button className="btn bg-violet-500 border-none text-white font-medium">Read More</button>
            </div>
          </div>
        </div>

        <div className="card text-gray-600 bg-white rounded-lg shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">Blog Post 2</h2>
            <p className="text-lg mb-4">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="card-actions flex justify-end">
              <button className="btn bg-violet-500 border-none text-white font-medium">Read More</button>
            </div>
          </div>
        </div>

        <div className="card text-gray-600 bg-white rounded-lg shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">Blog Post 3</h2>
            <p className="text-lg mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="card-actions flex justify-end">
              <button className="btn bg-violet-500 border-none text-white font-medium">Read More</button>
            </div>
          </div>
        </div>
      </div>

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

      <Footer/>
    </div>
  );
}

export default Career;
