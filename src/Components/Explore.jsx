import React from "react";
import banner from "./images/banner.png"
function Explore() {
  return (
    <div>
      <div className="bg-gray-100 py-10 pt-2">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">About us</h1>
          <p className="text-center mb-8">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat.
          </p>
          <div className="lg:flex gap-4">
            <img
  
              src={banner}
              alt="features-bg"
              className="rounded-lg shadow-2xl mx-auto lg:mr-4 mb-8 lg:mb-0 lg:max-w-md"
            />
            <div className="lg:flex-1">
              <h1 className="text-4xl font-bold mb-8">
                Powerful suite of tools
              </h1>
              <div className="mb-3">
                <div className="card w-82 bg-base-400 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Building the Simple ecosystem</h2>
                    <p>Take Collaboration to the next level with security and administrative features built for teams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
