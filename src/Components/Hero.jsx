import React from "react";

function Hero() {
  return (
    <div>
      <section className="text-gray-700 bg-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl mt-12 sm:text-6xl font-bold leading-56 uppercase font-raleway">
              WELCOME TO IGORAZA
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Start with something simple and small,then expand over time
            </p>
            <div className="">
              <button className="px-8 py-4 border-2 border-gray-500 text-black hover:bg-violet-500 hover:text-white hover:border-none font-bold">Get Started</button>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-6 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://mambaui.com/assets/svg/Business_SVG.svg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
