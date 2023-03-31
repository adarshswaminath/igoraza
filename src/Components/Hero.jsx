import React from "react";
import image from "./images/hero.svg"
import Spline from "@splinetool/react-spline";
function Hero() {
  return (
    <div>
      <section className="text-gray-700">
        <div className="container h-screen flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-2xl mt-14 sm:text-6xl  leading-56 uppercase font-semibold">
              WELCOME TO IGORAZA
            </h1>
            <p className="mt-3 mb-8 text-lg sm:mb-12">
              Start with something simple and small,then expand over time
            </p>
            <div className="">
              <a href="#view" 
              className="px-12 py-3 border-2 border-gray-500 text-black hover:bg-[#1d3557] hover:text-white hover:border-none font-bold">Get Started</a>
            </div>
          </div>
          <Spline
        scene="https://prod.spline.design/r2rPeVXGKGd2c26u/scene.splinecode"
      />

        </div>
      </section>
    </div>
  );
}

export default Hero;
