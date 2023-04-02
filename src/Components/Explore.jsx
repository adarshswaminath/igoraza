import React from "react";
import banner from "./images/banner.png";

function Explore() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="lg:flex gap-4">
          <img
            // src={banner}
            src="https://instasafe.com/featured-products/hero.webp"
            alt="features-bg"
            className="rounded-lg shadow-2xl mx-auto lg:mr-4 mb-8 lg:mb-0 lg:max-w-md"
          />
          <div className="lg:flex-1">
            <h2 className="text-xl font-bold mb-2">
              IGORAZA: Advancing Humanity Through Innovation
            </h2>
            <p className="text-lg mb-8 shadow-lg bg-base-400 p-4">
              IGORAZA is a progressive technological startup established by a consortium of passionate engineers. We are determined to advance humanity through slashing-edge technology innovations. By employing the most up-to-date software and techniques, we focus on creating and establishing exceptional solutions for our clients.
            </p>
            <div className="shadow-lg bg-base-400 w-82 p-4">
              <p className="text-lg">
              Our team is motivated by a passion for technology and a commitment to delivering incredible results. If you're seeking an engineering partner that can help you accomplish your objectives, we encourage you to get in touch with IGORAZA right away to learn more about our services.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
