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
            <h2 className="text-lg font-bold mb-2 text-gray-800">Innovation</h2>
            <p className="text-base text-gray-600">
            We are always pushing the boundaries of what is possible and are committed to developing innovative products and services that are designed to meet the needs of our clients and customers
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition duration-500">
            <div className="flex justify-center items-center w-20 h-20 rounded-full bg-orange-100 mb-4">
              <BsFillPeopleFill className="text-5xl text-orange-500" />
            </div>
            <h2 className="text-lg font-bold mb-2 text-gray-800">Flexibility</h2>
            <p className="text-base text-gray-600">
            We understand that every client and customer has unique needs, which is why we offer flexible solutions that can be customized to meet their specific requirements
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition duration-500">
            <div className="flex justify-center items-center w-20 h-20 rounded-full bg-yellow-100 mb-4">
              <SiVirtualbox className="text-5xl text-yellow-500" />
            </div>
            <h2 className="text-lg font-bold mb-2 text-gray-800">Customer Focus</h2>
            <p className="text-base text-gray-600">
            We are committed to putting our customers first. We work closely with our clients to understand their needs and provide them with the support and resources they need to succeed
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition duration-500">
            <div className="flex justify-center items-center w-20 h-20 rounded-full bg-green-100 mb-4">
              <MdPhoneCallback className="text-5xl text-green-500" />
            </div>
            <h2 className="text-lg font-bold mb-2 text-gray-800">Quality</h2>
            <p className="text-base text-gray-600">
            High-quality products and services that adhere to the strictest standards of excellence are what we are striving to deliver. Our team of qualified professionals is committed to making sure that our goods and services meet or exceed the expectations of our customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
