import React from 'react';
import { BsBinocularsFill,BsFillRocketTakeoffFill } from 'react-icons/bs';
import MissionImg from './images/mission.svg';

function Mission() {
  return (
    <div className="bg-gray-100 pt-4 mb-4">
        <div className="flex items-center justify-center p-5">
        <h1 className="text-4xl font-bold text-center md:text-left mt-8 mb-8 ">
            Mission & Vision
          </h1>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <img
            src={MissionImg}
            className="rounded-lg shadow-2xl w-full"
            alt="Mission"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-base-200 shadow-2xl rounded-lg px-8 py-6">
              <div className="flex gap-2 text-3xl">
              <h2 className="font-bold mb-4">Mission</h2>
              <BsFillRocketTakeoffFill className="text-violet-500" />
              </div>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                id nisi.
              </p>
            </div>
            <div className="bg-base-200 shadow-2xl rounded-lg px-8 py-6">
              <div className="flex gap-3 text-3xl">
                <h2 className="font-bold mb-4">Vision</h2>
                <BsBinocularsFill className='text-violet-500'/>
              </div>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
