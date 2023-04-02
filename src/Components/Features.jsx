import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { BsFillPeopleFill } from "react-icons/bs";
import { SiVirtualbox } from "react-icons/si";
import { MdPhoneCallback } from "react-icons/md";

function Features() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto sm:px-6 p-4 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Features</h1>

        <div className="grid md:grid-cols-4 gap-6 justify-items-center">
          <div className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition duration-500">
            <div className="flex justify-center items-center w-20 h-20 rounded-full bg-blue-100 mb-4">
              <GrServices className="text-5xl text-blue-500" />
            </div>
            <h2 className="text-lg font-bold mb-2 text-gray-800">Choosing A Service</h2>
            <p className="text-base text-gray-600">
              Take collaboration to the next level with security and administrative features built for teams
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition duration-500">
            <div className="flex justify-center items-center w-20 h-20 rounded-full bg-orange-100 mb-4">
              <BsFillPeopleFill className="text-5xl text-orange-500" />
            </div>
            <h2 className="text-lg font-bold mb-2 text-gray-800">Our Clients Say</h2>
            <p className="text-base text-gray-600">
              Discover what our clients have to say about our services and how we help them achieve their goals
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition duration-500">
            <div className="flex justify-center items-center w-20 h-20 rounded-full bg-yellow-100 mb-4">
              <SiVirtualbox className="text-5xl text-yellow-500" />
            </div>
            <h2 className="text-lg font-bold mb-2 text-gray-800">Virtual Communication</h2>
            <p className="text-base text-gray-600">
              Stay connected with your team and clients no matter where you are with our virtual communication tools
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition duration-500">
            <div className="flex justify-center items-center w-20 h-20 rounded-full bg-green-100 mb-4">
              <MdPhoneCallback className="text-5xl text-green-500" />
            </div>
            <h2 className="text-lg font-bold mb-2 text-gray-800">Repeat Callback</h2>
            <p className="text-base text-gray-600">
              Never miss a call again with our repeat callback feature that ensures your team stays on top of customer inquiries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
