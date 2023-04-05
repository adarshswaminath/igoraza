import React from "react";
import banner from "./images/banner.png";

function Explore() {
  return (
    <div class="bg-gray-100" id="about">
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse items-center lg:items-stretch">
      <img src={banner} class="mb-4 lg:mb-0 lg:mr-4" />
      <div class="text-center lg:text-left">
        <h1 class="text-4xl lg:text-5xl font-bold p-4">About us</h1>
        <p class="text-lg leading-7 bg-gray-100 p-6 border-l-4 border-blue-700">
          <span class="font-bold">IGORAZA</span> is a progressive technological startup established by a consortium of passionate engineers. We are determined to advance humanity through slashing-edge technology innovations. By employing the most up-to-date software and techniques, we focus on creating and establishing exceptional solutions for our clients.

          <br class="hidden md:block"/>

          <span class="font-bold block mt-4">Our team</span> is motivated by a passion for technology and a commitment to delivering incredible results. If you're seeking an engineering partner that can help you accomplish your objectives, we encourage you to get in touch with <span class="font-bold">IGORAZA</span> right away to learn more about our services.
        </p>
      </div>
    </div>
  </div>
</div>


  );
}

export default Explore;
