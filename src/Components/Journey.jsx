import React from 'react';

function Journey() {
  return (
    <div className="p-4">
      <div className="p-12 bg-[#1d3557] rounded-lg text-center">
        <h1 className="text-2xl text-white font-bold">Journey of Our Success</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <span className="text-4xl font-bold text-violet-400">85%</span>
            <p className="text-lg font-medium mt-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <span className="text-4xl font-bold text-violet-400">95%</span>
            <p className="text-lg font-medium mt-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <span className="text-4xl font-bold text-violet-400">75%</span>
            <p className="text-lg font-medium mt-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
