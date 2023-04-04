import React from "react";
import image from "./images/hero.svg"
function Hero() {
  return (
    <div>
      <section className="text-gray-700 bg-gray-100 mb-3">
        <div className="hero h-screen bg-cover bg-no-repeat bg-center relative">
          <div className="bg-gradient-to-b from-transparent to-gray-900 h-full w-full absolute"></div>
          <div className="hero-content flex-col lg:flex-row-reverse h-full">
            <div className="flex flex-col justify-center px-4 lg:px-0 lg:ml-8 xl:ml-16 2xl:ml-24">
              <h1 className="text-5xl lg:text-6xl font-sans font-extrabold text-white leading-tight">
                Welcome To IGORAZA
              </h1>
              <p className="py-6 text-lg text-gray-200">
                <p>Start with something simple and small,</p>
                <p>then expand over time</p>
              </p>
              <a className="btn w-40 lg:w-96 mx-auto border-none rounded-full bg-[#1d3557] hover:bg-[#1d3545] text-white font-bold uppercase tracking-wider">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
