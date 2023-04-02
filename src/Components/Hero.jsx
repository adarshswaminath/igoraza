import React from "react";
import image from "./images/hero.svg"
function Hero() {
  return (
    <div>
      <section className="text-gray-700 bg-gray-100">
        <div className="container h-screen flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-2xl mt-14 sm:text-6xl  leading-56 uppercase font-semibold">
              WELCOME TO IGORAZA
            </h1>
            <div className="mt-3 mb-8 sm:mb-12">
              <p>Start with something simple and small,</p>
              <p>then expand over time</p>
            </div>
            <div className="">
              <a href="#view" 
              className="px-12 py-3 border-2 border-gray-500 text-black hover:bg-[#1d3557] hover:text-white hover:border-none font-bold">Get Started</a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-6 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={image}
              alt=""
              className="object-contain h-72 sm:h-82 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
