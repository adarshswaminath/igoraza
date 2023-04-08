import React from "react";
import image from "./images/launch.png"
import heroimage from "./images/background.jpg"
function Hero() {
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/bQdghKV/background.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
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
      {/* <section className="text-gray-700 mb-3">
      <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero min-h-screen " style={{ backgroundImage: `url("https://i.ibb.co/bQdghKV/background.jpg")` }}>
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
      </section> */}
    </div>
  );
}

export default Hero;
