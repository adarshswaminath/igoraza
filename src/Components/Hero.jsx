import React from "react";
import image from "./images/launch.png"
function Hero() {
  return (
    <div>
      <section className="text-gray-700 mb-3">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={image} className="max-w-sm" />
            <div>
              <h1 className="text-5xl font-raleway font-extrabold">WELCOME TO IGORAZA</h1>
              <p className="py-6 text-lg">
                <p>Start with something simple and small,</p>
                <p>then expand over time</p>
              </p>
              <a href="#about" className="btn w-40 lg:w-96 mx-auto border-none rounded-full bg-[#1d3557] hover:bg-[#1d3545] text-white font-bold uppercase tracking-wider">
                Get Started
              </a>
            </div>
          </div>
        </div>
        {/* <div className="hero h-screen bg-cover bg-no-repeat bg-center relative" style={{ backgroundImage: `url("https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwNzItMDAzLnBuZw.png")` }}>
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
              <a href="#about" className="btn w-40 lg:w-96 mx-auto border-none rounded-full bg-[#1d3557] hover:bg-[#1d3545] text-white font-bold uppercase tracking-wider">
                Get Started
              </a>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}

export default Hero;
